/* Gulpfile */

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css');
	sourcemaps = require('gulp-sourcemaps');
	rename = require('gulp-rename')
	bulkSass = require('gulp-sass-bulk-import'),
	connect = require('gulp-connect'),
	ghPages = require('gulp-gh-pages'),
	concat = require('gulp-concat'),
	ghPages = require('gulp-gh-pages');

var sources = {
  	sass: [
  		'./app/main.scss',
  		'./app/components/**/styles/*.scss'
	],
	js: [
		'./node_modules/angular/angular.js',
		'./node_modules/angular-ui-router/release/angular-ui-router.js',
		'./app/components/core/scripts/app.js',
		'./app/components/**/scripts/*.module.js',
		'./app/components/**/scripts/*.view.js',
		'./app/components/**/scripts/*.factory.js',
		'./app/components/**/scripts/*.directive.js',
		'./app/components/**/scripts/*.controller.js',
	],
	images: [
		'./app/components/**/images/*.png',
		'./app/components/**/images/*.svg',
		'./app/components/**/images/*.jpg'
	],
	html: [
		'./app/*html'
	],
	views: [
		'./app/components/**/views/*.html'
	]
};

function swallowError (error) {
    //If you want details of the error in the console
    console.log(error.toString());
    this.emit('end');
}

gulp.task('compile-sass', function(){
	return gulp.src( './app/main.scss' )
    	.pipe(bulkSass())
		.pipe(sass({style: 'compressed'}).on('error', swallowError) )
		.pipe(gulp.dest('./build'))
		.pipe(connect.reload());
});

gulp.task('minify-css', function() {
  	return gulp.src('./build/main.css')
    	.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(rename({suffix: '.min'}))
    	.pipe(gulp.dest('./build'));
});

gulp.task('map-css', function() {
	return gulp.src('./build/main.min.css')
		.pipe(sourcemaps.init())
		.pipe(rename({suffix: '.map'}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./build'));
});

gulp.task('concat-js', function() {
	return gulp.src(sources.js)
    	.pipe(concat('main.js'))
    	.pipe(gulp.dest('./build'));
});

gulp.task('copy-images', function() {
	return gulp.src(sources.images)
		.pipe(rename({dirname: ''}))
    	.pipe(gulp.dest('./build/images'));
});

gulp.task('copy-html', function() {
	return gulp.src(sources.html)
    	.pipe(gulp.dest('./build'));
});

gulp.task('copy-views', function() {
	return gulp.src(sources.views)
		.pipe(rename({dirname: ''}))
    	.pipe(gulp.dest('./build/views'));
});

gulp.task('reload', function(){
	return gulp.src('./')
		.pipe(connect.reload());
});

gulp.task('connect', function(){
	return connect.server({
		root: 'build',
		livereload: true,
		port:3030
	});
});

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

gulp.task('watch', function(){
	gulp.watch(sources.sass, ['compile-sass', 'minify-css', 'map-css', 'reload']);
	gulp.watch(sources.js, ['concat-js', 'reload']);
	gulp.watch(sources.images, ['copy-images', 'reload']);
	gulp.watch(sources.html, ['copy-html', 'reload']);
	gulp.watch(sources.views, ['copy-views', 'reload']);
});

// gulp.task('deploy', function() {
//   return gulp.src('./dist')
//     .pipe(ghPages());
// });

gulp.task('default', ['compile-sass', 'concat-js', 'copy-images', 'copy-html', 'copy-views', 'connect', 'watch']);
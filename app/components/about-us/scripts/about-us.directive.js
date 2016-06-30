(function() {

'use strict';


angular
    .module('BWPestSolutions.aboutUs')
    .directive('aboutUs', aboutUs);

function aboutUs() {
    return {
		restrict: 'A',
		transclude: true,
		templateUrl: './views/about-us.html',
	};
}

})();

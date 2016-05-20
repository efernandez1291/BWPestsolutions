angular
    .module('BWPestSolutions.header')
    .directive('header', header);

function header() {
    return {
		restrict: 'E',
		transclude: true,
		templateUrl: './views/header.html',
		controller: 'HeaderController as vm'
	};
}

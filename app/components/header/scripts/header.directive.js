(function() {

'use strict';

angular
    .module('BWPestSolutions.header')
    .directive('header', header);

function header() {
    return {
		restrict: 'A',
		transclude: true,
		templateUrl: './views/header.html',
		controller: 'HeaderController as vm'
	};
}

})();

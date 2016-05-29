(function() {

'use strict';

angular
    .module('BWPestSolutions.footer')
    .directive('footer', footer);

function footer() {
    return {
		restrict: 'A',
		transclude: true,
		templateUrl: './views/footer.html',
		controller: 'FooterController as vm'
	};
}

})();

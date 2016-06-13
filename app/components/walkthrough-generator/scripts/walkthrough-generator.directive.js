(function() {

'use strict';

angular
    .module('BWPestSolutions.walkthroughGenerator')
    .directive('walkthroughGenerator', walkthroughGenerator);

function walkthroughGenerator() {
    return {
		restrict: 'A',
		transclude: true,
		templateUrl: './views/walkthrough-generator.html',
		controller: 'walkthroughGeneratorController as vm'
	};
}

})();

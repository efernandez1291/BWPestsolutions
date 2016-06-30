(function() {

'use strict';

angular
    .module('BWPestSolutions.pestIdentifier')
    .directive('pestIdentifier', pestIdentifier);

function pestIdentifier() {
    return {
		restrict: 'A',
		transclude: true,
		templateUrl: './views/pest-identifier.html',
		controller: 'PestIdentifierController as vm'
	};
}

})();

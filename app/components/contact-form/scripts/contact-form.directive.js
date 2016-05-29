(function() {

'use strict';


angular
    .module('BWPestSolutions.contactForm')
    .directive('contactForm', contactForm);

function contactForm() {
    return {
		restrict: 'EA',
		transclude: true,
		templateUrl: './views/contact-form.html',
		controller: 'ContactFormController as vm'
	};
}

})();

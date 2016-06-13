(function() {

'use strict';

angular
    .module('BWPestSolutions.residential')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        
      $stateProvider
            
            .state('residential', {
              url: '/residential',
              templateUrl: './views/residential.html',
            });

    });

})();
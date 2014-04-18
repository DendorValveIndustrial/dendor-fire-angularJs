'use strict';

/* Directives */

angular.module('valvesDirectives', [])

  .directive('analytics', ['$rootScope', '$location',
    function ($rootScope, $location) {
      return {
        link: function (scope, elem, attrs, ctrl) {
          $rootScope.$on('$routeChangeSuccess', function(event, currRoute, prevRoute) {
            ga('set', 'page', $location.path());
            ga('send', 'pageview');
          });
        }
      }
    }]);

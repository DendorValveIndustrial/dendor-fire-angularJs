'use strict';

/* App Module */

angular.module('valvesApp', [
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'valvesAnimations',
    'valvesControllers',
    'valvesFilters',
    'valvesServices',
    'valvesDirectives'
  ])

  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      //$locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/catalog', {
          templateUrl: '/partials/group-list.html',
          controller: 'GroupListCtrl'
        }).
        when('/:groupId', {
          templateUrl: '/partials/group-details.html',
          controller: 'GroupDetailCtrl'
        }).
        when('/:groupId/:itemId', {
          templateUrl: '/partials/item-details.html',
          controller: 'ItemDetailCtrl'
        }).
        otherwise({
          redirectTo: '/catalog'
        });
    }])

  .run(['$rootScope','$location',function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
      //change this code to handle the error somehow
      $location.path('/404').replace();
    });
  }]);

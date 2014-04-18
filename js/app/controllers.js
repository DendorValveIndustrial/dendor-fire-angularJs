'use strict';

/* Controllers */

angular.module('valvesControllers', [])

  .controller('GroupListCtrl', ['$scope', 'Groups',
    function($scope, Groups) {
      $scope.groups = Groups.query();
      $scope.orderProp = 'sorting';
    }])

  .controller('GroupDetailCtrl', ['$scope', '$routeParams', 'Groups', '$location',
    function($scope, $routeParams, Groups, $location) {
      $scope.groupList = Groups.query();
      $scope.group = Groups.get({groupId: $routeParams.groupId},
        function(response, getReponseHeaders){
          $location.path();
        },
        function(response, getReponseHeaders){
          if (response.status == 404) {
            $location.path('/');
          }
        });
      $scope.curGroupId = $routeParams.groupId;
      $scope.isActive = function (groupId) {
        return $routeParams.groupId === groupId;
      };
    }
    ])

  .controller('ItemDetailCtrl', ['$scope', '$routeParams', 'Groups', 'Items', '$location',
    function($scope, $routeParams, Groups, Items, $location) {
      $scope.group = Groups.get({groupId: $routeParams.groupId});
      $scope.item = Items.get({groupId: $routeParams.groupId, itemId: $routeParams.itemId},
        function(response, getReponseHeaders){
          $location.path();
        },
        function(response, getReponseHeaders){
          if (response.status == 404) {
            $location.path('/');
          }
        });
      $scope.itemRouteParams = $routeParams;
      $scope.isActive = function (itemId) {
        return $routeParams.itemId === itemId;
      };
    }
    ]);

'use strict';

/* Services */

angular.module('valvesServices', ['ngResource'])

  .factory('Groups', ['$resource',
    function($resource){
      return $resource('/data/:groupId.json', {}, {
        query: {method: 'GET', params:{groupId:'catalog'}, isArray:true}
      });
    }])

  .factory('Items', ['$resource',
    function($resource){
      return $resource('/data/:groupId/:itemId.json', {}, {
        query: {method: 'GET', params:{groupId:'catalog'}, isArray:true}
      });
    }]);

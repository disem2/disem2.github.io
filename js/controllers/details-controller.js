angular.module('Search')
.controller('detailsCtrl', function($http, $routeParams){
  this.url = '../../base.json';
  var current = this;
  $http({method: 'GET', url: this.url}).success(function(data) {
    current.curr = data.response.listings[$routeParams.id];
  });
});
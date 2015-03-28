angular.module('Search')
.controller('searchCtrl', ['$scope', '$http', function($scope, $http){
  $scope.list = [];
  $scope.url = '../../base.json';
  $http({method: 'GET', url: $scope.url}).success(function(data) {
    $scope.list = data.response.listings;
  });
  $scope.redirect = function(index) {
    console.log(index);
  };
}]);
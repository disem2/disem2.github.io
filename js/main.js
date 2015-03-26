angular.module('Search', [])
.controller('searchCtrl', ['$scope', '$http', function($scope, $http){
  $scope.list = array;
  $scope.url = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds';
  $http({method: 'POST', url: $scope.url}).success(function(data) {
      $scope.posts = data; // response data 
    });
}])
.directive('result', function(){  
  return {
    restrict: 'E',
    templateUrl: '../template.html'
  };
});
var array = [
  {
    price: 20945,
    street: "Somewhere",
    town: "nowhere"
  },
  {
    price: 20,
    street: "Somewhere",
    town: "nowhere"
  }
];
angular.module('Search', [])
.directive('result', function(){
  return {
    scope: {},
    controller: function($scope, $element, $attrs, $transclude) {},
    restrict: 'E',
    templateUrl: '../template.html'
  };
});
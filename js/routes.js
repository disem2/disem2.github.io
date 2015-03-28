angular.module('Search')
.config(function($routeProvider){
  $routeProvider.when('/search', {
    templateUrl: '../templates/pages/search/index.html',
    controller: 'searchCtrl'
  })
  .when('/', {
    templateUrl: '../templates/pages/search/index.html',
    controller: 'searchCtrl'
  })
  .when('/show/:id', {
    templateUrl: '../templates/pages/search/show.html',
    controller: 'detailsCtrl',
    controllerAs: 'detale'
  })  
  .otherwise({ redirectTo: '/' });
});
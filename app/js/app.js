'use strict';

// Declare app level module which depends on filters, and services
angular.module('demoApp', ['ngRoute', 'ui.bootstrap', 'demoApp.controllers']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'TasksController'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

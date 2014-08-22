'use strict';

angular.module('demoApp.controllers', []).controller('TasksController', ['$scope', function($scope) {
  $scope.tasks = []

  $scope.init = function() {
    $scope.createTask('Call Charlie for his birthday');
    $scope.createTask('Invite friends to come over for the game');
    $scope.createTask('Do groceries');
  }

  $scope.createTask = function(description) {
    var task = {
      description: description,
      status: 'active'
    }
    $scope.tasks.push(task);
  }
}]);

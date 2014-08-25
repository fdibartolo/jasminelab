'use strict';

angular.module('demoApp.controllers', []).controller('TasksController', 
['$scope', '$filter', function($scope, $filter) {
  $scope.tasks = []
  $scope.newTask = {
    description: ''
  }

  $scope.init = function() {
    $scope.createTask('Call Charlie for his birthday');
    $scope.createTask('Invite friends to come over for the game');
    $scope.createTask('Do groceries');
  }

  $scope.addTask = function() {
    $scope.createTask($scope.newTask.description);
    $scope.newTask.description = ''
  }

  $scope.createTask = function(description) {
    var task = {
      description: description,
      status: 'active'
    }
    $scope.tasks.push(task);
  }

  $scope.activeTasks = function() {
    return $filter('filter')($scope.tasks, {status: 'active'})
  }

  $scope.doneTasks = function() {
    return $filter('filter')($scope.tasks, {status: 'done'})
  }

  $scope.markAsDone = function(task) {
    task.status = 'done';
  }
}]);

'use strict';

describe('TasksController', function(){
  beforeEach(module('demoApp.controllers'));

  var scope, controller;
  beforeEach(inject(function($rootScope, $filter, $controller) {
    scope = $rootScope.$new();
    controller = $controller('TasksController', { $scope: scope, $filter: $filter });
  }));

  it('should have a list of tasks', function() {
    expect(scope.tasks).toBeDefined();
  });

  it("should be able to create tasks with description and default _active_ status", function() {
    expect(scope.tasks.length).toBe(0);
    scope.createTask('some tasks');
    expect(scope.tasks.length).toBe(1);
    expect(scope.tasks[0].description).toBe('some tasks');
    expect(scope.tasks[0].status).toBe('active');
  });

  it("should initialize with 3 tasks", function() {
    expect(scope.tasks.length).toBe(0);
    scope.init();
    expect(scope.tasks.length).toBe(3);
  });

  it("should return active tasks", function() {
    scope.createTask('a task');
    scope.tasks.push({description: 'nailed!', status: 'done'});

    expect(scope.tasks.length).toBe(2);
    expect(scope.activeTasks().length).toBe(1);
  });

  it("should mark tasks as done", function() {
    scope.init();
    var firstTask = scope.tasks[0];
    scope.markAsDone(firstTask);

    expect(scope.tasks.length).toBe(3);
    expect(scope.activeTasks().length).toBe(2);
  });
});

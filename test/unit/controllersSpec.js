'use strict';

describe('TasksController', function(){
  beforeEach(module('demoApp.controllers'));

  var scope, controller;
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('TasksController', { $scope: scope });
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
});

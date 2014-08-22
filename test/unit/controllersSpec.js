'use strict';

describe('TasksController', function(){
  beforeEach(module('demoApp.controllers'));

  it('should have a list of tasks', inject(function($rootScope, $controller) {
    var scope = $rootScope.$new();
    var controller = $controller('TasksController', { $scope: scope });

    expect(scope.tasks).toBeDefined();
  }));

  it("should be able to create tasks with description and default _active_ status", inject(function($rootScope, $controller) {
    var scope = $rootScope.$new();
    var controller = $controller('TasksController', { $scope: scope });

    expect(scope.tasks.length).toBe(0);
    scope.createTask('some tasks');
    expect(scope.tasks.length).toBe(1);
    expect(scope.tasks[0].description).toBe('some tasks');
    expect(scope.tasks[0].status).toBe('active');
  }));

  it("should initialize with 3 tasks", inject(function($rootScope, $controller) {
    var scope = $rootScope.$new();
    var controller = $controller('TasksController', { $scope: scope });

    expect(scope.tasks.length).toBe(0);
    scope.init();
    expect(scope.tasks.length).toBe(3);
  }));
});

'use strict';

describe('directives', function() {
  beforeEach(module('demoApp.directives'));
  beforeEach(module('partials/openTask.html'));

  describe('open-task', function() {
    it('should have a Done button and the description', function() {
      inject(function($compile, $rootScope) {
        $rootScope.task = { description: 'some task' };
        var element = angular.element('<div open-task></div>');
        $compile(element)($rootScope);
        $rootScope.$digest();

        expect(element.find('button').length).toBe(1);
        expect(element.find('button').text()).toBe('Done');
      });
    });
  });
});

'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe("Home page", function() {
  beforeEach(function() {
    browser.get('#/');
  });

  it("should be the default one", function() {
    browser.get('#/');
    expect(browser.getLocationAbsUrl()).toMatch('/home');
  });

  describe(", while clicking task Done button", function() {
    it("should remove given task", function() {
      var firstTaskDescription;
      element.all(by.binding('task.description')).first().getText().then(function(text) {
        firstTaskDescription = text;
      })

      clickFirstDoneTask();

      element.all(by.binding('task.description')).first().getText().then(function(text) {
        expect(text).not.toBe(firstTaskDescription);
      })
    });
  });  

  describe(", while clicking Show completed button", function() {
    it("should show given done task", function() {
      var firstTaskDescription;
      element.all(by.binding('task.description')).first().getText().then(function(text) {
        firstTaskDescription = text;
      })

      clickFirstDoneTask();
      clickShowCompleted();

      element.all(by.binding('task.description')).last().getText().then(function(text) {
        expect(text).toBe(firstTaskDescription);
      })
    });

    it("should change its title", function() {
      expect(element(by.css('.btn.btn-default.btn-xs')).getText()).toBe('View Completed tasks');
      clickShowCompleted();
      expect(element(by.css('.btn.btn-default.btn-xs')).getText()).toBe('Hide Completed tasks');
    });

    it("should show custom message if no done tasks", function() {
      clickShowCompleted();
      expect(element(by.id('no-done-tasks')).getText()).toBe('You better do something soon!');
    });
  });

  describe(", while clicking New task button", function() {
    it("should show input to enter new task", function() {
      expect(element.all(by.model('newTask.description')).count()).toBe(0);
      clickNewTask();
      expect(element.all(by.model('newTask.description')).count()).toBe(1);
    });

    it('should change its text', function(){
      expect(element(by.css('.btn.btn-xs.btn-info')).getText()).toEqual('Add new task');
      clickNewTask();
      expect(element(by.css('.btn.btn-xs.btn-info')).getText()).toEqual('Close');
    });
  });  

  describe(", while clicking Add task button", function() {
    it('should display task in the list', function(){
      clickNewTask();
      element(by.model('newTask.description')).sendKeys('my new task');
      clickAddTask();
      element.all(by.binding('task.description')).last().getText().then(function(text) {
        expect(text).toEqual('my new task');
      });
    });
  });  

  function clickFirstDoneTask() {
    element.all(by.css('.btn.btn-primary.btn-xs')).first().click();
  }

  function clickShowCompleted() {
    element(by.css('.btn.btn-default.btn-xs')).click();
  }

  function clickNewTask() {
    element(by.css('.btn.btn-xs.btn-info')).click();
  }

  function clickAddTask() {
    element(by.css('.btn.btn-success')).click();
  }
});
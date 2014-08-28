'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe("Home page", function() {
  it("should be the default one", function() {
    browser.get('#/');
    expect(browser.getLocationAbsUrl()).toMatch('/home');
  });

  describe(", while clicking task Done button", function() {
    it("should remove given task", function() {
      browser.get('#/home');
      
      var firstTaskDescription;
      firstTask().getText().then(function(text) { firstTaskDescription = text; })

      clickFirstTaskDoneButton();

      firstTask().getText().then(function(text) { expect(text).not.toBe(firstTaskDescription); })
    });
  });  

  describe(", while clicking Show completed button", function() {
    it("should show given done task", function() {
      browser.get('#/home');

      var firstTaskDescription;
      firstTask().getText().then(function(text) { firstTaskDescription = text; })

      clickFirstTaskDoneButton();
      clickShowCompletedTasksButton();

      lastTask().getText().then(function(text) { expect(text).toBe(firstTaskDescription); })
    });

    it("should change its title", function() {
      browser.get('#/home');

      expect(showCompletedTasksButton().getText()).toBe('View Completed tasks');
      clickShowCompletedTasksButton();
      expect(showCompletedTasksButton().getText()).toBe('Hide Completed tasks');
    });

    it("should show custom message if no done tasks", function() {
      browser.get('#/home');

      clickShowCompletedTasksButton();
      expect(element(by.id('no-done-tasks')).getText()).toBe('You better do something soon!');
    });
  });

  describe(", while clicking New task button", function() {
    it("should show input to enter new task", function() {
      browser.get('#/home');

      expect(newTaskInput().isPresent()).toBe(false);
      clickNewTaskButton();
      expect(newTaskInput().isPresent()).toBe(true);
    });

    it('should change its text', function(){
      browser.get('#/home');

      expect(newTaskButton().getText()).toEqual('Add new task');
      clickNewTaskButton();
      expect(newTaskButton().getText()).toEqual('Close');
    });
  });  

  describe(", while clicking Add task button", function() {
    it('should display task in the list', function(){
      browser.get('#/home');
      
      clickNewTaskButton();
      newTaskInput().sendKeys('my new task');
      clickAddTaskButton();
      lastTask().getText().then(function(text) { expect(text).toBe('my new task'); })
    });
  });  
});

function firstTask() {
  return element.all(by.binding('task.description')).first();
}

function lastTask() {
  return element.all(by.binding('task.description')).last();
}

function clickFirstTaskDoneButton() {
  element.all(by.css('.btn.btn-primary.btn-xs')).first().click();
}

function showCompletedTasksButton() {
  return element(by.css('.btn.btn-default.btn-xs'));
}

function clickShowCompletedTasksButton() {
  element(by.css('.btn.btn-default.btn-xs')).click();
}

function newTaskButton() {
  return element(by.css('.btn.btn-xs.btn-info'));
}

function newTaskInput() {
  return element(by.model('newTask.description'));
}
function clickNewTaskButton() {
  element(by.css('.btn.btn-xs.btn-info')).click();
}

function clickAddTaskButton() {
  element(by.css('.btn.btn-success')).click();
}

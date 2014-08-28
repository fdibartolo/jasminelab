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

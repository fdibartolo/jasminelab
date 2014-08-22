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
      element.all(by.binding('task.description')).first().getText().then(function(text) {
        firstTaskDescription = text;
      })

      element.all(by.css('.btn.btn-primary.btn-xs')).first().click();

      element.all(by.binding('task.description')).first().getText().then(function(text) {
        expect(text).not.toBe(firstTaskDescription);
      })
    });
  });  
});
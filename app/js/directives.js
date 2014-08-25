'use strict';

angular.module("demoApp.directives", [])
  .directive("openTask", function() {
    return {
      restrict: "A",
      templateUrl: "partials/openTask.html",
      replace: true
    };
  });

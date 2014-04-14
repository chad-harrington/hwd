'use strict';

angular.module('hwdApp')
  .directive('navbar', function () {
    return {
      restrict: 'EA',
      templateUrl: 'templates/navbar.html',
      controller: 'NavigationCtrl'
    };
  });

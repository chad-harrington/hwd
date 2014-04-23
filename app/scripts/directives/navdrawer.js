'use strict';

angular.module('hwdApp')
  .directive('navDrawer', function () {
    return {
      templateUrl: 'templates/nav-drawer.html',
      restrict: 'EA',
      controller: 'NavigationCtrl'
    };
  });

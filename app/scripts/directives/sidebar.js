'use strict';

angular.module('hwdApp')
.directive('sidebar', function () {
	return {
		restrict: 'EA',
		templateUrl: 'templates/sidebar.html',
		controller: 'SidebarCtrl'
	};
});

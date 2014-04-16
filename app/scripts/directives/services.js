'use strict';

angular.module('hwdApp')
.directive('services', function () {
	return {
		templateUrl: 'templates/services.html',
		restrict: 'EA',
		controller: 'ServicesCtrl'
	};
});

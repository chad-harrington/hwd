'use strict';

angular.module('hwdApp')
.directive('services', function () {
	return {
		templateUrl: 'templates/services',
		restrict: 'EA',
		controller: 'ServicesCtrl'
	};
});

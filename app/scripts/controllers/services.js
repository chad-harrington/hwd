'use strict';

angular.module('hwdApp')
	.controller('ServicesCtrl', function ($scope, Services) {
		$scope.services = Services.query();
	});

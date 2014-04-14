'use strict';

angular.module('hwdApp')
	.controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {

		$scope.activeView = function() {
			console.log($location.path());
			return $location.path();
		};

	}]);

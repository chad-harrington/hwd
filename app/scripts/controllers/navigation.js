'use strict';

angular.module('hwdApp')
.controller('NavigationCtrl', ['$scope', '$location', 'Navigation', function ($scope, $location, $navService) {
	
	$scope.navData = $navService.query();

	$scope.isActive = function(path){
		return path === $location.path();
	};

}]);

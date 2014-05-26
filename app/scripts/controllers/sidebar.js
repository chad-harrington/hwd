'use strict';

angular.module('hwdApp')
.controller('SidebarCtrl', function ($scope, Skills, Services) {
	
	// Get data from services
	$scope.services = Services.query();
	$scope.skills = Skills.query();

	$scope.rate = 3;
	$scope.max = 5;
	$scope.isReadonly = true;

	$scope.hoveringOver = function(value) {
		$scope.overStar = value;
		$scope.percent = 100 * (value / $scope.max);
	};

	
	$scope.ratingStates = [
		{stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
		{stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
		{stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
		{stateOn: 'glyphicon-heart'},
		{stateOff: 'glyphicon-off'}
	];

});

'use strict';

angular.module('hwdApp')
.controller('ContactCtrl', function ($scope, $http) {

	$scope.interestedServices = [
		{
			label: 'Website Development',
			selected: false
		},
		{
			label: 'Website Design',
			selected: false
		},
		{
			label: 'E-Commerce',
			selected: false
		},
		{
			label: 'Convert PSD to HTML',
			selected: false
		},
		{
			label: 'other',
			selected: false
		}
	];


	$scope.today = function() {
		$scope.dt = new Date();
	};
	$scope.today();

	$scope.clear = function () {
		$scope.dt = null;
	};

	// Disable weekend selection
	$scope.disabled = function(date, mode) {
		return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	};

	$scope.toggleMin = function() {
		$scope.minDate = $scope.minDate ? null : new Date();
	};
	$scope.toggleMin();

	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.opened = true;
	};

	$scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

	$scope.initDate = new Date('2016-15-20');
	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[3];




	$scope.otherInterestedServiceMode = function() {
		return $scope.interestedServices[$scope.interestedServices.length-1].selected;
	};

	$scope.submit = function() {
		if ($scope.contactForm.$valid) {
			console.log('sending request to server');
			$http.post('http://www.harringtonwebdesign.com/gdform.php', $scope.contactForm);
		}
	};

});

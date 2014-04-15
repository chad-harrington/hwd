'use strict';

angular.module('hwdApp')
.controller('ContactCtrl', function ($scope) {
	
	//$scope.formContact;

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



});

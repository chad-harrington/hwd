'use strict';

angular.module('hwdApp')
.controller('SidebarCtrl', function ($scope) {
	$scope.skills = [
		{
			type: 'html',
			stars: 5
		},
		{
			type: 'css',
			stars: 5
		},
		{
			type: 'javascript',
			stars: 4
		},
		{
			type: 'angular',
			stars: 4
		},
		{
			type: 'jquery',
			stars: 4
		},
		{
			type: 'bash scripting',
			stars: 3.5
		},
		{
			type: 'yeoman',
			stars: 3
		},
		{
			type: 'git',
			stars: 3
		},
		{
			type: 'photoshop',
			stars: 4
		}
	];
});

'use strict';

angular.module('hwdApp')
.controller('HomeCtrl', function ($scope, Skills, Services) {
	
	// Slider
	$scope.slideInterval = 10000;
	$scope.slides = [
		{ img: 'images/portfolio/mitsu_folio_slide_1.jpg', imgAlt: 'image alt', caption: 'caption 1'},
		{ img: 'images/portfolio/mitsu_folio_slide_3.jpg', imgAlt: 'image alt', caption: 'caption 2'},
		{ img: 'images/portfolio/vic_folio_slide_1.jpg', imgAlt: 'image alt', caption: 'caption 3'},
		{ img: 'images/portfolio/vic_folio_slide_3.jpg', imgAlt: 'image alt', caption: 'caption 4'}
	];

	// Services
	$scope.services = Services.query();
	$scope.skills = Skills.query();


});

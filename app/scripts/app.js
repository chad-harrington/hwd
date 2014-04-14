'use strict';

angular.module('hwdApp', [
	'ui.bootstrap',
	'ngResource',
	'ngRoute',
	'ngAnimate'
])
.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactCtrl'
		})
		.when('/portfolio', {
			templateUrl: 'views/portfolio.html',
			controller: 'PortfolioCtrl'
		})
		.when('/services', {
			templateUrl: 'views/services.html',
			controller: 'ServicesCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});

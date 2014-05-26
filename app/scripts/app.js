'use strict';

var lodash = angular.module('lodash', []);
lodash.factory('_', function() {
	// assumes lodash has already been loaded on the page
	return window._;
});


angular.module('hwdApp', [
	'ui.bootstrap',
	'ui.utils',
	'ui.map',
	'ngResource',
	'ngRoute',
	'lodash',
	'snap'
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

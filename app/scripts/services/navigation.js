'use strict';

angular.module('hwdApp')
	.service('Navigation', function Navigation() {
	
		this.query = function() {
			return [
				{
					icon: 'glyphicon-user',
					linkText: 'About',
					linkUrl: 'about'
				},
				{
					icon: 'glyphicon-cog',
					linkText: 'Services',
					linkUrl: 'services'
				},
				{
					icon: 'glyphicon-briefcase',
					linkText: 'Portfolio',
					linkUrl: 'portfolio'
				},
				{
					icon: 'glyphicon-send',
					linkText: 'Contact',
					linkUrl: 'contact'
				}
				
			];
		};

	});

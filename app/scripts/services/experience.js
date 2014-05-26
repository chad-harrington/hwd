'use strict';

angular.module('hwdApp')
.service('Experience', function Experience() {

	this.query = function() {
		return [
			{
				company: 'Meredith Xcelerated Marketing',
				position: 'Sr. UI Developer',
				description: 'responsive site development, mobile development, assist other UI Developers, help managers establish a project timeline, research and test frameworks, prototype front-end solutions, and drink coffee.',
				date: {
					from: 'May 2011',
					to: 'Present'
				}
			},
			{
				company: 'Belkin',
				position: 'Front-End Developer',
				description: 'front-end development, newsletters, web banners, UI asset development, form validation, user experience, and accessibility.',
				date: {
					from: 'May 2010',
					to: 'May 2011'
				},
				contract: true
			},
			{
				company: 'Brilliant Blue',
				position: 'Front-End Developer',
				description: 'front-end development, CMS skinning, progressive enhancement, newsletters, web banners, and accessibility.',
				date: {
					from: 'January 2010',
					to: 'April 2010'
				},
				contract: true
			},
			{
				company: 'The Traffic Agency',
				position: 'Production Artist',
				description: 'web design, asset development, e-mail design, web banners, photo re-touches, wireframes, and storyboards.',
				date: {
					from: 'September 2009',
					to: 'December 2009'
				},
				contract: true
			},
			{
				company: 'Harrington Web Design',
				position: 'Owner',
				description: 'Advertise, consult with clients, bid projects, negotiate deals, design and develop, invoice clients, and balance accounts.  The site is currently under re-construction but feel free to visit for more information: www.HarringtonWebDesign.com.',
				date: {
					from: 'January 2008',
					to: 'Present'
				},
				freelance: true
			},
			{
				company: 'Kerry Consulting Group',
				position: 'Consultant',
				description: 'Visited schools within the Long Beach Unified School District and issued a technology survey. Transferred the survey data to a spreadsheet, which was then submitted to the district.',
				date: {
					from: 'November 2007',
					to: 'March 2008'
				},
				contract: true
			}
		];
	};

});

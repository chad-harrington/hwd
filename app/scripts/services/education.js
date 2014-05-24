'use strict';

angular.module('hwdApp')
.service('Education', function Education() {
	
	this.query = function() {
		return {
			school: 'California State Polytechnic University, Pomona',
			degree: 'Bachelor of Science in Business Administration',
			emphasis: 'Emphasis in Computer Information Systems',
			gpa: {
				calpoly: 3.68,
				cumulative: 3.59
			},
			graduated: 'Winter 2008'
		};
	};

});

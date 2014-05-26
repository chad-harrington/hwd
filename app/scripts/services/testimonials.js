'use strict';

angular.module('hwdApp')
.service('Testimonials', function Testimonials() {

	this.query = function() {
		return [
			{
				author: 'Dorothy Schaller',
				quote: 'I have never worked with someone who is so professional and reliable! Chad displayed such a high level of concern and gratitude when completing my projects by my requested deadline! I would recommend Chad for any project.'
			},
			{
				author: 'Sean Harrington',
				quote: 'I have never worked with someone who is so professional and reliable! Chad displayed such a high level of concern and gratitude when completing my projects by my requested deadline! I would recommend Chad for any project.'
			}
		];
	};


});

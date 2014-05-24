'use strict';

angular.module('hwdApp')
.service('Skills', function Skills() {

	this.query = function() {
		return [
			{
				category: 'programming',
				items: [
					{
						type: 'HTML',
						stars: 4
					},
					{
						type: 'CSS',
						stars: 4
					},
					{
						type: 'Javascript',
						stars: 4
					},
					{
						type: 'LESS',
						stars: 4
					},
					{
						type: 'SASS (or SCSS)',
						stars: 4
					},
					{
						type: 'jQuery',
						stars: 4
					},
					{
						type: 'Backbone',
						stars: 4
					},
					{
						type: 'Underscore',
						stars: 4
					},
					{
						type: 'Git',
						stars: 4
					},
					{
						type: 'Bash/SSH (Terminal)',
						stars: 4
					},
					{
						type: 'PHP',
						stars: 4
					},
					{
						type: '.NET',
						stars: 4
					}
				]
			},
			{
				category: 'software',
				items: [
					{
						type: 'Sublime Text'
					},
					{
						type: 'Photoshop'
					},
					{
						type: 'Slicy'
					},
					{
						type: 'Tower'
					},
					{
						type: 'Kaleidoscope'
					},
					{
						type: 'Transmit'
					},
					{
						type: 'CodeKit'
					},
					{
						type: 'Fireworks'
					},
					{
						type: 'Illustrator'
					},
					{
						type: 'Visual Studio'
					},
					{
						type: 'Alfred'
					},
					{
						type: 'TextExpander'
					}
				]
			}
		];
	};

});

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
						stars: 5,
						category: 'html'
					},
					{
						type: 'CSS',
						stars: 5,
						category: 'css'
					},
					{
						type: 'Javascript',
						stars: 4,
						category: 'javascript'
					},
					{
						type: 'LESS',
						stars: 4,
						category: 'css'
					},
					{
						type: 'SASS (or SCSS)',
						stars: 4,
						category: 'css'
					},
					{
						type: 'jQuery',
						stars: 4,
						category: 'javascript'
					},
					{
						type: 'Angular',
						stars: 3,
						category: 'javascript'
					},
					{
						type: 'Backbone',
						stars: 3,
						category: 'javascript'
					},
					{
						type: 'Underscore',
						stars: 3,
						category: 'javascript'
					},
					{
						type: 'Git',
						stars: 3,
						category: 'terminal'
					},
					{
						type: 'Bash/SSH (Terminal)',
						stars: 3,
						category: 'terminal'
					},
					{
						type: 'PHP',
						stars: 3,
						category: 'php'
					},
					{
						type: '.NET',
						stars: 2,
						category: '.net'
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
			},
			{
				category: 'personal',
				items: [
					{
						type: 'team-oriented worker'
					},
					{
						type: 'proactive leader'
					},
					{
						type: 'active listener'
					},
					{
						type: 'problem solver'
					},
					{
						type: 'love to learn'
					}

				]
			}
		];
	};

});

'use strict';

angular.module('hwdApp')
	.service('Services', function() {
		
		this.query = function() {
			return [
				{
					name: 'site design',
					category: {
						name: 'design'
					},
					description: 'Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.'
				},
				{
					name: 'site development',
					category: {
						name: 'design'
					},
					description: 'Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.'
				},
				{
					name: 'custom ui development',
					category: {
						name: 'design'
					},
					description: 'Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.'
				},
				{
					name: 'wordpress site',
					category: {
						name: 'design'
					},
					description: 'Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.'
				},
				{
					name: 'responsive site',
					category: {
						name: 'design'
					},
					description: 'Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.'
				}
			];
		};

	});

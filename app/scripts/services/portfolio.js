'use strict';

angular.module('hwdApp')
	.service('Portfolio', function Portfolio() {
	
		this.query = function() {
			return [
				{
					client: 'Mitsubishi',
					about: 'Mitsubishi is responsible for the manufacturing, financing, distributing and marketing of Mitsubishi brand coupes, convertibles, sedans, light trucks, and crossover utility vehicles through a network of hundreds of dealers throughout the United States. If you\'re looking for something unique, something that stands out, you\'ll find it at Mitsubishi Motors.',
					servicesRendered: [
						{ type: 'Production Artist' },
						{ type: 'Site Re-skin' },
						{ type: 'Production Artist' }
					],
					slides: [
						{
							imgSrc: 'images/portfolio/mitsu_folio_slide_1.jpg',
							imgSrcLg: 'images/portfolio/mitsu_folio_slide_lrg1.jpg',
							caption: ''
						},
						{
							imgSrc: 'images/portfolio/mitsu_folio_slide_2.jpg',
							imgSrcLg: 'images/portfolio/mitsu_folio_slide_lrg2.jpg',
							caption: ''
						},
						{
							imgSrc: 'images/portfolio/mitsu_folio_slide_3.jpg',
							imgSrcLg: 'images/portfolio/mitsu_folio_slide_lrg3.jpg',
							caption: ''
						}
					],
					url: 'http://www.mitsubishicars.com/'
				}
			];
		};

	});

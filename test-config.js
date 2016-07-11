module.exports = {
	host: require('system').env.HOST, // CasperJS-specific
	selector: 'body',
	viewports: {
		'smartphone-portrait': [320, 480],
		'smartphone-landscape': [480, 320],
		'tablet-portrait': [768, 1024],
		'tablet-landscape': [1024, 768],
		'desktop-standard': [1280, 1024]
	},
	pages: {
		'home': {
			path: '/'
		},
		'artist': {
			path: '/artist/keane'
		},
		'release': {
			path: '/artist/keane/release/perfect-symmetry-1'
		},
		'charts': {
			path: '/charts'
		},
		'search': {
			path: '/search?q=three-pages-of-results'
		},
		'search-release': {
			path: '/search/release?q=three-pages-of-results'
		},
		'search-artist': {
			path: '/search/artist?q=three-pages-of-results'
		},
		'search-track': {
			path: '/search/track?q=three-pages-of-results'
		},
		'genres': {
			path: '/genre'
		},
		'genre': {
			path: '/genre/pop'
		},
		// IGNORE AND REVIEW AT A LATER DATE, ISSUE WITH PHANTOMCSS AND YOUTUBE
		// 'feature-interview': {
		// 	path: '/features/VFuGfygAACcA-uY6/honeyblood',
		// 	setup: function placeholderYouTubeVideos(casper) {
		// 		console.log('Replacing YouTube embeds with placeholders');

		// 		var placeholder = 'data:text/html,' +
		// 			'<img src="https://placeholdit.imgix.net/~text?txtsize=30&txt=%5B+YouTube+Placeholder+%5D&w=400&h=258&txttrack=0&bg=000000&txtclr=ffffff"' +
		// 				'style="position: absolute; top: 0; left: 0">';

		// 		casper.thenEvaluate(function swapYouTubeEmbeds(placeholder) {
		// 			// Executed client-side
		// 			$('iframe[src*="youtube"]').attr('src', placeholder)
		// 		}, placeholder);
		// 	}
		// },
		'feature-best-of': {
			path: '/features/VFOr4ygAACcA6zaV/best-of-2014'
		},
		'feature-product-list': {
			path: '/features/VFNrPigAACcA6rd4/new-tracks'
		},
		'feature-ones-to-watch': {
			path: '/features/VJLvkigAACkA24Z2/ones-to-watch-2015'
		},
		'feature-label-focus': {
			path: '/features/VRq9kCkAAA2fUChH/label-focus?prismicRef=VS0WZScAADkA1F2_',
			// Mysteriously stopped working in some cases, possibly when
			// phantomjs is running on linux
			// 'headers': {
			// 	'x-7d-prismic-ref': 'VS0WZScAADkA1F2_'
			// }
		},
		'feature-awards-award': {
			path: '/features/VOMHUyYAAPWHdX_G/brits-music-award'
		},
		// IGNORE AND REVIEW AT A LATER DATE, ISSUE WITH PHANTOMCSS AND YOUTUBE
		// 'feature-awards-award-2': {
		// 	path: '/features/VriKLCkAAPE-l70s/brits-music-award?prismicRef=Vrx-FikAAPQmkvaG'
		// },
		'basket': {
			path: '/search?q=keane',
			cookies: [{
				name: 'SevenDigital.Web.Session',
				value: 'sid2=basket-with-two-items'
			}],
			setup: function showBasket(casper) {
				console.log('Showing basket');
				casper.thenClick('.header-basket-link');
				casper.waitForSelector('.notification.basket.is-visible');
			}
		},
		'legal': {
			'path': '/legal?prismicRef=VVSYmi0AAJgBZDQ7',
			// Mysteriously stopped working in some cases, possibly when
			// phantomjs is running on linux
			// 'headers': {
			// 	'x-7d-prismic-ref': 'VVSYmi0AAJgBZDQ7'
			// }
		},
		'legal-policies': {
			'path': '/legal/VVIaxi0AAC__V7_9?prismicRef=VVSYmi0AAJgBZDQ7',
			// Mysteriously stopped working in some cases, possibly when
			// phantomjs is running on linux
			// 'headers': {
			// 	'x-7d-prismic-ref': 'VVSYmi0AAJgBZDQ7'
			// }
		}
	}
};

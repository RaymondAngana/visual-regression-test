module.exports = {
	host: require('system').env.HOST, // CasperJS-specific
	selector: 'body',
	viewports: {
		'desktop-standard': [1280, 1024]
	},
	pages: {
		'home': {
			path: '/'
		},
		'about': {
			path: '/about'
		},
		'community': {
			path: '/community'
		},
		'research': {
			path: '/research'
		},
		'news-and-events': {
			path: '/news-and-events'
		},
		'resources': {
			path: '/resources'
		},
		'contact': {
			path: '/contact'
		}
	}
};

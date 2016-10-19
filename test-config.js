module.exports = {
	host: require('system').env.HOST, // CasperJS-specific
	selector: 'body',
	viewports: {
		'desktop-standard': [1280, 1024]
	},
	pages: {

		// Main Menu pages
		'home': {
			path: '/'
		},
		'about': {
			path: '/about'
		},
		'research': {
			path: '/research'
		},
		'community': {
			path: '/community'
		},
		'news-and-events': {
			path: '/news-and-events'
		},
		'resources': {
			path: '/resources'
		},
		'contact': {
			path: '/contact'
		},

		// "About" Sub Menus and Sub Pages.
		'mission-statement': {
			path: '/about/mission-statement'
		},
		'leadership': {
			path: '/about/leadership'
		},
		'leadership-cohen': {
			path: '/about/leadership/myron-s-cohen'
		},
		'leadership-el-sadr': {
			path: '/about/leadership/wafaa-el-sadr'
		},
		'conversations': {
			path: '/about/conversations'
		},
		'conversations-chirenje': {
			path: '/about/conversations/mike-chirenje'
		},
		'conversations-shackelford': {
			path: '/about/conversations/louis-shackelford'
		},
		'network-groups-committees': {
			path: '/about/network-groups-committees'
		},
		'groups-working': {
			path: '/about/network-groups-committees/working-groups-wgs'
		},
		'groups-scientific-committee': {
			path: '/about/network-groups-committees/scientific-committee-scs'
		},
		'committees-policies-procedures': {
			path: '/about/network-groups-committees/policies-and-procedures-group'
		},
		'committees-performance-eval': {
			path: '/about/network-groups-committees/performance-evaluation-committee'
		},
		'funding': {
			path: '/about/funding'
		},
		'ethics': {
			path: '/about/ethics'
		}
	}
};

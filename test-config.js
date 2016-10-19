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
		},

		// "Research" Sub Menus and Sub Pages.
		'studies': {
			path: '/research/studies'
		},
		'studies-hvtn704': {
			path: '/research/studies/177'
		},
		'studies-hvtn703': {
			path: '/research/studies/167'
		},
		'studie-hptn-067': {
			path: '/research/studies/82'
		},
		'studies-hptn-052': {
			path: '/research/studies/33'
		},
		'sites': {
			path: '/research/sites'
		},
		'sites-ACSA': {
			path: '/research/sites/8'
		},
		'sites-Bronx': {
			path: '/research/sites/20'
		},
		'publications': {
			path: '/research/publications'
		},
		'publications-HIV-drug': {
			path: '/research/publications/659'
		},
		'publications-gender-attitudes': {
			path: '/research/publications/674'
		},
		'scholars': {
			path: '/research/scholars'
		},
		'scholars-domestic': {
			path: '/research/scholars/domestic'
		},
		'scholars-international': {
			path: '/research/scholars/international'
		},
		'scholars-scholars': {
			path: '/research/scholars/scholars'
		},
		'scholars-international-khoza': {
			path: '/research/scholars/scholars/nomhle-khoza'
		},
		'scholars-domestic-ojeda': {
			path: '/research/scholars/scholars/dr-victoria-ojeda'
		},
		'scholars-projects': {
			path: '/research/scholars/projects'
		},
		'scholars-projects-manuscript': {
			path: '/node/253'
		},
		'scholars-projects-poster': {
			path: '/node/247'
		},
		'scholars-projects-oral': {
			path: '/node/240'
		},
		'scholars-projects-oral-poster': {
			path: '/node/239'
		},

		// "Community" Sub Menus and Sub Pages.
		'study-participation': {
			path: '/community/study-participation-information'
		},
		'meetings-events': {
			path: '/community/meetings-events'
		},
		'meetings-educators-training': {
			path: '/news-and-events/meetings/hptn-083-community-educators-training'
		},
		'meetings-annual-meeting': {
			path: '/news-and-events/meetings/2016-hptn-network-annual-meeting'
		},
		'photos-video': {
			path: '/community/photos-video'
		},
		'photo-writing-workshop': {
			path: '/community/photos-video/hptnmtn-community-writing-workshop'
		},
		'video-sten-vermund': {
			path: '/community/photos-video/sten-vermund-discusses-hptn-community'
		},
		'community-team': {
			path: '/community/community-team'
		},
		'community-toolbox': {
			path: '/community/community-toolbox'
		},
		'FAQ': {
			path: '/community/community-toolbox/faq'
		},
		'FAQ-CIWP': {
			path: '/community/community-toolbox/faq/what-community-involvement-work-plan-ciwp'
		},
		'FAQ-informed-consent': {
			path: '/community/community-toolbox/faq/what-informed-consent'
		},

		// "News & Events" Sub Menus and Sub Pages.
		'press-releases': {
			path: '/news-and-events/press-releases'
		},
		'press-releases-hptn-responds': {
			path: '/news-and-events/press-releases/hptn-responds-to-results-from-anrs-12249-tasp-study-presented-at'
		},
		'press-releases-hptn-073': {
			path: '/news-and-events/press-releases/hptn-073-consistency-between-self-report-and-drug-levels-for-prep'
		},
		'announcements': {
			path: '/news-and-events/announcements'
		},
		'announcements-at-HIVR4P': {
			path: '/news-and-events/announcements/hptn-at-hivr4p'
		},
		'announcements-accept-applications': {
			path: '/news-and-events/announcements/scholars-programs-accepting-applications'
		},
		'meetings': {
			path: '/news-and-events/meetings'
		},
		'newsletters': {
			path: '/news-and-events/newsletters'
		},

		// "Resources" Sub Menus and Sub Pages.
		'prevention': {
			path: '/resources/prevention'
		},
		'network-templates': {
			path: '/resources/network-templates'
		},
		'manual-operations': {
			path: '/resources/manual-of-operations'
		},
		'regulatory-resources': {
			path: '/resources/regulatory'
		},
		'external-resources': {
			path: '/resources/external'
		}
	}
};

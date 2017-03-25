module.exports = {
	host: require('system').env.HOST, // CasperJS-specific.

	// Variables used for testing as an Authenticated user.
	runAuthenticated: true, // Set to false if you do wish to run tests as an Authenticated user.
	loginPath: '/user/login',
	loginFormSelector: 'form#user-login-form', // Form tag followed by ID.
	userName: 'admin', // Username or user email - depending upon website setup.
	userPass: 'N1PxyyXIgrgai0puAk5q', // Password.

	selector: 'body',
	screenshotPrefixAnon: 'anon', // Screenshot prefix for an Anonymous user testing.
	screenshotPrefixAuth: 'auth', // Screenshot prefix for an Authenticated user testing.
	viewports: {
		'desktop-standard': [1600, 3000]
	},
	pages: {
        "home": {
            "path": "/"
        },
        "about-martin-county": {
            "path": "/about-martin-county"
        },
        "access-denied": {
            "path": "/access-denied"
        },
        "accessibility": {
            "path": "/accessibility"
        },
        "addressingproject": {
            "path": "/addressingproject"
        },
        "websiteinsight": {
            "path": "/articles/websiteinsight"
        },
        "Beaches": {
            "path": "/Beaches"
        },
        "building": {
            "path": "/building"
        },
        "business": {
            "path": "business"
        },
        "doing-business-w-martin-county": {
            "path": "/business/doing-business-w-martin-county"
        },
        "codered": {
            "path": "/codered"
        },
        "CommissionerInfo": {
            "path": "/CommissionerInfo"
        },
        "commissioners": {
            "path": "/commissioners"
        },
        "contact-us": {
            "path": "/contact-us"
        },
        "CountyProjects": {
            "path": "/CountyProjects"
        },
        "CRA": {
            "path": "/CRA"
        },
        "customer-service": {
            "path": "/martin-county-services/customer-service"
        },
        "DAC": {
            "path": "/DAC"
        },
        "administration-department": {
            "path": "/government/departments/administration-department"
        },
        "growth-management-department": {
            "path": "/government/departments/growth-management-department"
        },
        "district-1-commissioner": {
            "path": "/district-1-commissioner"
        },
        "district-2-commissioner": {
            "path": "/district-2-commissioner"
        },
        "drug-testing": {
            "path": "/drug-testing"
        },
        "employees": {
            "path": "/employees"
        },
        "discover-opera-lecture-series": {
            "path": "/events/2016-11-27t140000-2016-11-27t150000/discover-opera-lecture-series"
        },
        "hobe-sound-story-time-0-24-mos": {
            "path": "/events/2017-04-13t103000-2017-04-13t110000/hobe-sound-story-time-0-24-mos"
        },
        "act-prep-course": {
            "path": "/events/2017-04-06t173000-2017-04-06t193000/act-prep-course"
        },
        "robots-and-technology": {
            "path": "/events/2017-03-29t150000-2017-03-29t160000/robots-and-technology"
        },
        "rural-indiantown-revitalization-advisory-board-meeting": {
            "path": "/events/2017-03-09t163000/rural-indiantown-revitalization-advisory-board-meeting"
        },
        "morgade-family-place": {
            "path": "/events/2017-03-13t103000-2017-03-13t114500/morgade-family-place"
        },
        "homework-helper-185": {
            "path": "/events/homework-helper-185"
        },
        "homework-helper-186": {
            "path": "/events/homework-helper-186"
        },
        "music-motion-99": {
            "path": "/events/music-motion-99"
        },
        "robert-morgade-library-book-club-14": {
            "path": "/events/robert-morgade-library-book-club-14"
        },
        "financial-transparency": {
            "path": "/martin-county-services/financial-transparency"
        },
        "follow-us": {
            "path": "/follow-us"
        },
        "government": {
            "path": "/government"
        },
        "about-county-administrator": {
            "path": "/government/county-administrator/about-county-administrator"
        },
        "departments": {
            "path": "/government/departments"
        },
        "welcome-human-resources": {
            "path": "/government/departments/administration/welcome-human-resources"
        },
        "about": {
            "path": "/parksandrec/about"
        },
        "engineering-department": {
            "path": "/government/departments/engineering-department"
        },
        "neighborhood-restoration-projects": {
            "path": "/government/departments/engineering-department/neighborhood-restoration-projects"
        },
        "development-review": {
            "path": "/government/departments/growth-management-department/development-review"
        },
        "mission-statement": {
            "path": "/government/departments/growth-management-department/environmental-information/mission-statement"
        },
        "information-technology-services-department": {
            "path": "/government/departments/information-technology-services-department"
        },
        "national-association": {
            "path": "/government/departments/information-technology-services-department/awards/national-association"
        },
        "kids-teens-parents": {
            "path": "/government/departments/library-system/kids-teens-parents"
        },
        "library-return-investment-calculator": {
            "path": "/government/departments/library/support-your-library/library-return-investment-calculator"
        },
        "indian-riverside-park": {
            "path": "/martin-county-services/indian-riverside-park"
        },
        "music-mansion": {
            "path": "/government/departments/parks-and-recreation-department/music-mansion"
        },
        "utilities-solid-waste-department": {
            "path": "/government/departments/utilities-solid-waste-department"
        },
        "other-government": {
            "path": "/government/other-government"
        },
        "hazardous-waste": {
            "path": "/hazardous-waste"
        },
        "hurricane": {
            "path": "/hurricane"
        },
        "i-want-to": {
            "path": "/i-want-to"
        },
        "idea-lab-equipment-list": {
            "path": "/idea-lab-equipment-list"
        },
        "idea-labs": {
            "path": "/idea-labs"
        },
        "ISO": {
            "path": "/ISO"
        },
        "dgaa": {
            "path": "/its/awards/dgaa"
        },
        "jobs": {
            "path": "/jobs"
        },
        "Libraries": {
            "path": "/Libraries"
        },
        "mansion": {
            "path": "/mansion"
        },
        "07-sep-16-dac-meeting": {
            "path": "/martin-county-services/07-sep-16-dac-meeting"
        },
        "2015-state-county-presentation": {
            "path": "/martin-county-services/2015-state-county-presentation"
        },
        "2016-2017-comprehensive-plan-amendments": {
            "path": "/martin-county-services/2016-2017-comprehensive-plan-amendments"
        },
        "2017-bookmania": {
            "path": "/martin-county-services/2017-bookmania"
        },
        "aaf-press-releases": {
            "path": "/martin-county-services/aaf-press-releases"
        },
        "about-development-review": {
            "path": "/martin-county-services/about-development-review"
        },
        "ada-business-evaluation": {
            "path": "/martin-county-services/ada-business-evaluation"
        },
        "ada-compliance": {
            "path": "/martin-county-services/ada-compliance"
        },
        "ada-property-inspection": {
            "path": "/martin-county-services/ada-property-inspection"
        },
        "ada-related-repairs-county-parks": {
            "path": "/martin-county-services/ada-related-repairs-county-parks"
        },
        "addressing-reports-and-information": {
            "path": "/martin-county-services/addressing-reports-and-information"
        },
        "airport-planning-construction": {
            "path": "/martin-county-services/airport-planning-construction"
        },
        "alternative-compliance-cras-application-form": {
            "path": "/martin-county-services/alternative-compliance-cras-application-form"
        },
        "alternative-compliance-landscape-application-form": {
            "path": "/martin-county-services/alternative-compliance-landscape-application-form"
        },
        "anne-m-joel-l-pearl-cancer-resource-center": {
            "path": "/martin-county-services/anne-m-joel-l-pearl-cancer-resource-center"
        },
        "application-development-review-reservation-extension-or-timetable-extension": {
            "path": "/martin-county-services/application-development-review-reservation-extension-or-timetable-extension"
        },
        "application-major-final-site-plan-or-revised-major-site-plan": {
            "path": "/martin-county-services/application-major-final-site-plan-or-revised-major-site-plan"
        },
        "application-major-final-site-plan-tower": {
            "path": "/martin-county-services/application-major-final-site-plan-tower"
        },
        "application-zoning-change": {
            "path": "/martin-county-services/application-zoning-change"
        },
        "applications-and-checklists": {
            "path": "/martin-county-services/applications-and-checklists"
        },
        "apply-be-parks-vendor": {
            "path": "/martin-county-services/apply-be-parks-vendor"
        },
        "audits": {
            "path": "/martin-county-services/audits"
        },
        "library-book-clubs": {
            "path": "/martin-county-services/library-book-clubs"
        },
        "library-event-calendar": {
            "path": "/martin-county-services/library-event-calendar"
        },
        "ordinances-951-1000": {
            "path": "/martin-county-services/ordinances-951-1000"
        },
        "parents": {
            "path": "/martin-county-services/parents"
        },
        "technical-services": {
            "path": "/martin-county-services/technical-services"
        },
        "teens": {
            "path": "/teens"
        },
        "tent-permitsinspections": {
            "path": "/martin-county-services/tent-permitsinspections"
        },
        "MartinCountyTrails": {
            "path": "/MartinCountyTrails"
        },
        "MCvolunteers": {
            "path": "/MCvolunteers"
        },
        "MosquitoControl": {
            "path": "/MosquitoControl"
        },
        "office-community-strategic-partnerships": {
            "path": "/office-community-strategic-partnerships"
        },
        "open-government": {
            "path": "/open-government"
        },
        "public-meetings": {
            "path": "/open-government/public-meetings"
        },
        "parkfinder": {
            "path": "/parkfinder"
        },
        "parksandrec": {
            "path": "/parksandrec"
        },
        "plan-getaway-just-few-days-or-plan-your-escape-paradise-few-weeks": {
            "path": "/plan-getaway-just-few-days-or-plan-your-escape-paradise-few-weeks"
        },
        "privacy-policy": {
            "path": "/privacy-policy"
        },
        "PropertyLookup": {
            "path": "/PropertyLookup"
        },
        "residents": {
            "path": "/residents"
        },
        "library-information": {
            "path": "/residents/libraries/library-information"
        },
        "stories-impact": {
            "path": "/residents/libraries/library-programs/stories-impact"
        },
        "budget-and-finance": {
            "path": "/resources/budget-and-finance"
        },
        "crash-surveillance-report-2016-2": {
            "path": "/resources/crash-surveillance-report-2016-2"
        },
        "development-review-application": {
            "path": "/resources/development-review-application"
        },
        "development-review-fee-schedule": {
            "path": "/resources/development-review-fee-schedule"
        },
        "municode-martin-county": {
            "path": "/resources/municode-martin-county"
        },
        "SailfishSplashWaterparkInfo": {
            "path": "/SailfishSplashWaterparkInfo"
        },
        "sports": {
            "path": "/sports"
        },
        "terms-service": {
            "path": "/terms-service"
        },
        "kids-teens": {
            "path": "/things-do/kids-teens"
        },
        "things-to-do": {
            "path": "/things-to-do"
        },
        "get-involved": {
            "path": "/things-to-do/get-involved"
        },
        "transit": {
            "path": "/transit"
        },
        "utilities-north-treatment-plant": {
            "path": "/utilities-north-treatment-plant"
        },
        "UtilitiesInfo": {
            "path": "/UtilitiesInfo"
        },
        "watch-mctv": {
            "path": "/watch-mctv"
        }
	}
};

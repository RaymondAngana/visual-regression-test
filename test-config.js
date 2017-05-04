module.exports = {
	host: require('system').env.HOST, // CasperJS-specific.

	// Variables used for testing as an Authenticated user.
	runAuthenticated: true, // Set to true if you wish to run tests as an Authenticated user.
    runAuthenticatedOnly: false, // Set to true if you wish to run tests as Authenticated user ONLY.

    loginObj: [
        {
            path: '/user/login',
            formSelector: 'form#user-login', // Form tag followed by ID.
            userName: 'regressiontest3', // Username or user email - depending upon website setup.
            userPass: '1234', // Password.
        }
    ],

	selector: 'body',
	screenshotPrefixAnon: 'anon', // Screenshot prefix for an Anonymous user testing.
	screenshotPrefixAuth: 'auth', // Screenshot prefix for an Authenticated user testing.
	viewports: {
		'desktop-standard': [1600, 3000]
	},
	pages: [
        '/',
        '/dashboard',
        '/guide-type',
        '/jobs',
        '/internships',
        '/h1b',
        '/employers',
        '/training',
        '/about-us',
        '/about-us/testimonials'
    ]
};

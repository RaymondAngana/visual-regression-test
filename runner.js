var config = require('./test-config');
var phantomcss = require('phantomcss');
var util = require('util');
var url = require('url');
var pageNames = Object.keys(config.pages);
var viewportNames = Object.keys(config.viewports);
var cookieDomain = url.parse(config.host).hostname;

function log() {
	var args = arguments;
	return function log() {
		console.log(util.format.apply(util, args));
	};
}

function getHeaders(config, page) {
	var headers = (config.headers)? config.headers : {};

	if (page.headers) {
		for (var attr in page.headers) {
			headers[attr] = page.headers[attr];
		}
	}

	return headers;
}

function setCookies(cookies) {
	if (cookies) {
		cookies.forEach(function setCookieWithDomain(cookie) {
			cookie.domain = cookieDomain;
			phantom.addCookie(cookie);
		});
	}
}

function checkStatusAndWait(res) {
	if (res.status !== 200) {
		this.die('Expected 200 status code, got ' + res.status, 1);
	}
	// Pseudo-readyness-checks
	this.waitWhileSelector('.jplayer-stub'); // Player initialised
	this.waitForSelector('.header-basket-total'); // Basket retrieved
}

phantomcss.init({
	screenshotRoot: './screenshots',
	failedComparisonsRoot: './failures',
	mismatchTolerance: 0.1,
	libraryRoot: './node_modules/phantomcss'
});

casper.start().each(pageNames, function testPage(casper, pageName) {
	var page = config.pages[pageName];
	this.then(function configureRequest() {
		phantom.clearCookies();
		setCookies(config.cookies);
		setCookies(page.cookies);
	});
	var url = config.host + page.path;
	var headers = getHeaders(config, page);
	this.then(log('Opening', url));
	this.thenOpen(url, { headers: headers }, checkStatusAndWait);
	this.each(viewportNames, function testViewport(casper, viewportName) {
		var viewport = config.viewports[viewportName];
		this.then(log('Setting viewport to %j', viewport));
		this.then(function setViewport() {
			this.viewport.apply(this, viewport);
		});
		this.then(log('Capturing screenshot'));
		this.then(function captureScreenshot(){
			var fileName = pageName + '-' + viewportName;
			phantomcss.screenshot(config.selector, fileName);
		});
	});
});

casper.then(function diffScreenshots() {
	phantomcss.compareAll();
});

casper.then(function byeBye() {
	// Separate 'then' because compareAll makes its own calls to 'then' and
	// this must come after
	this.test.done();
});

casper.run();

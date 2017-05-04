var config = require('./test-config');
var phantomcss = require('phantomcss');
var util = require('util');
var url = require('url');
var pageNames = Object.keys(config.pages);
var viewportNames = Object.keys(config.viewports);
var cookieDomain = url.parse(config.host).hostname;
var loginObj = config.loginObj;
var runAuthenticated = config.runAuthenticated;
// Define default screenshot prefix.
// We use Anonymous user prefix "anon" as default.
var screenshotPrefix = config.screenshotPrefixAnon;


String.prototype.ucFirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

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

function waitForJavaScript() {
  // Pseudo-readyness-checks.
  console.log('Waiting for JavaScript');
  this.waitWhileSelector('.jplayer-stub'); // Player initialised.
  this.waitForSelector('.header-basket-total'); // Basket retrieved.
}

function loadImages() {
  console.log('Loading lazy-loaded images');

  this.on('page.error', function exitWithError(msg, stack) {
    stack = stack.reduce(function (accum, frame) {
      return accum + util.format('\tat %s (%s:%d)\n',
        frame.function || '<anonymous>',
        frame.file,
        frame.line
      );
    }, '');
    this.die(util.format('Client-side error\n%s\n%s', msg, stack), 1);
  });
  //this.on('remote.message', function logClientSideConsole(msg) {
  //	console.log('Client-side log:', msg);
  //});
  this.thenEvaluate(function loadLazyLoadedImages() {
    // Executed client-side
    var lazyload = require('webstore-client/ui/lazyload');
    $('.lazy-load').each(function loadImage() { lazyload.load(this, true); });
  });
  // Lazy-loaded images have a placeholder data gif src before loading.
  this.waitWhileSelector('.lazy-load[src^="data"]');
}

/*
 * Tests page with specified settings.
 * @param {object} pageName
 */
function testPage(casper, pageName) {
  var page = config.pages[pageName];
  var pageName = (page.charAt(0) == '/' && page.length > 1) ? page.substr(1) : page;
      pageName = (page == '/') ? 'Home' : pageName.replace(/\//g, '-').ucFirst();

  this.then(function configureRequest() {
    setCookies(config.cookies);
    setCookies(page.cookies);
  });
  var url = config.host + page;
  var headers = getHeaders(config, page);

  this.then(log('Opening', url));
  this.thenOpen(url, {headers: headers}, function checkStatus(res) {
    if (res.status !== 200) {
      this.die('Expected 200 status code, got ' + res.status, 1);
    }
  });
  if (page.setup) {
    this.then(page.setup.bind(null, this));
  }
  // Sets Viewport.
  this.each(viewportNames, function testViewport(casper, viewportName) {
      var viewport = config.viewports[viewportName];
      this.then(log('Setting viewport to %j', viewport));
      this.then(function setViewport() {
        this.viewport.apply(this, viewport);
      });
      this.then(log('Capturing screenshot'));
      // Capture screenshot and save it w/ customized file name.
      this.then(function captureScreenshot() {
        var viewPortVal = '(' + viewport + ')';
        var abbr = {
          's': screenshotPrefix,
          'v': viewPortVal.replace(',', 'x')
        }
        var fileName = abbr.s + '-' + pageName + '-' + viewportName + abbr.v;
        phantomcss.screenshot(config.selector, fileName);
      });
    });
}

/*
 * Logs in as User w/ userName|userPass credentials.
 */
function authenticateUser() {
  // Clear cookies.
  phantom.clearCookies();

  var loginPath, loginFormSelector,userName, userPass;

  for(var i = 0 ; i < loginObj.length; i++) {
      loginPath = loginObj[i].path;
      loginFormSelector = loginObj[i].formSelector;
      userName = loginObj[i].userName;
      userPass = loginObj[i].userPass;

    // Load Login URL and authenticate as userName and userPass.
    casper.thenOpen(config.host + loginPath, function() {
      this.test.assertUrlMatches(config.host + loginPath,
        "On the Login page.");
      this.test.assertExists(loginFormSelector, 'Login form is found.');
      // Log in with set credentials.
      this.fill(loginFormSelector, {
        name: userName,
        pass: userPass
      }, true);
      /*
       * TODO:
       * If necessary - Add an assertion that User was logged in correctly.
       * E.g. Url match - this.test.assertUrlMatches(config.host + '/user/1',
       * "On the Admin account page"); - is too specific
       * and will only work for certain setups,
       * where user is redirected to account page upon login.
       */
    });
  }
}

phantomcss.init({
  screenshotRoot: './screenshots',
  failedComparisonsRoot: './failures',
  mismatchTolerance: 0.1,
  libraryRoot: './node_modules/phantomcss',
  prefixCount: true // Moves numbering in front of the file name.
});

casper.start();
casper.setHttpAuth('demo', 'demo').then(function () {
  this.options.waitTimeout = 15000;
})
.each(pageNames, testPage) // Processes every page as Anonymous user.
.then(function() {
  // Conditional processing as Authenticated user.
  if (runAuthenticated) {
    authenticateUser();
    // Change screenshot prefix.
    screenshotPrefix = config.screenshotPrefixAuth;
    // Runs tests as Authenticated User if applicable.
    casper.each(pageNames, testPage);
  }
});

casper.then(function diffScreenshots() {
  // No assertions are run when generating reference screenshots.
  // There has to be at least one assertion so casper doesn't exit with
  // code 1 and "WARN Looks like you didn't run any test."
  casper.test.assert(true, 'Dummy assertion');
  phantomcss.compareAll();
});

casper.then(function byeBye() {
  // Separate 'then' because compareAll makes its own calls to 'then' and
  // this must come after.
  this.test.done();
});

casper.run();

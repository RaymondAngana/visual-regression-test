# Visual Regression Test

A project that uses CasperJS with PhantomCSS to perform visual regression tests.

# Setup

	npm install

# Usage
	
	node casperjs-wrapper

The first run generates reference screenshots.  Subsequent runs generate new screenshots and diff against the respective reference screenshot.  Failures occur if the difference exceeds the defined threshold.

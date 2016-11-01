# Visual Regression Test

A project that uses CasperJS with PhantomCSS to perform visual regression tests.

## Set variables

Set HOST variable in `docker-compose.yml`.

Set variables in `test-config.js`.

Available variables allow to initiate Authenticated user testing.

## Make targets

`make install` -- builds the docker container for testing

NOTE: `make install` should be run each time `runner.js` is updated

`make references` -- deletes any existing reference images and creates new reference images

`make comparisons` -- runs regression tests by generating comparison images and comparing to reference images

`make remove-comparison-images` -- deletes comparison images

`make remove-all-images` -- deletes all images (comparison and reference)

## To Configure

### docker-compose.yml

Add the "HOST" environment variable as the url you want to test

### test-config.js

Configure your test variables, including:

* `host` -- read from the docker-compose.yml environment variables (leave as is)
* `selector` -- body is good, but can be tweaked to be more specific
* `viewports` -- viewport size to use for regression tests (can be multiple)
* `pages` -- key/value pairs where the "key" is a single word description of the page you are testing (used in the screenshot name) and the "value" is the path of the page to test

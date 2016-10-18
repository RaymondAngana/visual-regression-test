# Visual Regression Test

A project that uses CasperJS with PhantomCSS to perform visual regression tests.

## Make targets

`make install` -- builds the docker container for testing

`make references` -- deletes any existing reference images and creates new reference images

`make comparisons` -- runs regression tests by generating comparison images and comparing to reference images

`make remove-comparison-images` -- deletes comparison images

`make remove-all-images` -- deletes all images (comparison and reference)

FROM node:0.10-slim
RUN npm install -g npm@2.13.2

RUN apt-get update && apt-get install -y --no-install-recommends\
	python libfreetype6 libfontconfig1 bzip2 ca-certificates subversion

# PhantomJS doesn't support WOFF webfonts in versions <2
# Installing opensans like this makes it render slightly better fonts though
WORKDIR /usr/share/fonts
RUN svn checkout https://github.com/google/fonts/trunk/apache/opensans .
RUN chmod 775 *.ttf

WORKDIR /tests
ADD package.json ./package.json
RUN npm install
ADD *.js ./
CMD node casperjs-wrapper.js

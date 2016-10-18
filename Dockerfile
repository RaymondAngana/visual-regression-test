FROM node:4.6.0
RUN npm install -g npm@2.13.2

RUN apt-get update && apt-get install -y --no-install-recommends\
	python libfreetype6 libfontconfig1 bzip2 ca-certificates subversion

# PhantomJS doesn't support WOFF webfonts in versions <2
# Installing opensans like this makes it render slightly better fonts though
WORKDIR /usr/share/fonts
RUN svn checkout https://github.com/google/fonts/trunk/apache/opensans .
RUN chmod 775 *.ttf

WORKDIR /tests
COPY package.json ./package.json
COPY npm-shrinkwrap.json ./npm-shrinkwrap.json
COPY .npmrc-authed .npmrc
RUN npm install
COPY *.js ./
CMD node casperjs-wrapper.js

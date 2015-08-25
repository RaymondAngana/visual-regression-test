FROM node:0.10-slim
RUN npm install -g npm@2.13.2

RUN apt-get update && apt-get install -y --no-install-recommends\
	python libfreetype6 libfontconfig1 bzip2

WORKDIR /tests
ADD *.js* ./
RUN npm install
CMD node casperjs-wrapper.js

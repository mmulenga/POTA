FROM ubuntu:latest
MAINTAINER Nikolaos Konstantinidis <nick.kon@usask.ca>

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm

RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN npm install -g http-server

RUN apt-get install -y wget
RUN npm install -g n
RUN n stable

RUN npm install -g yarn
RUN yarn install

RUN npm install -g jest

WORKDIR /usr/apps/POTA/dist 
CMD ["http-server", "-s"]
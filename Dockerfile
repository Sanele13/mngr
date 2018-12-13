FROM node:9
MAINTAINER Sanele Mpangalala <sanele.mpangalala@edgelearningmedia.com>

RUN apt-get update && apt-get install
RUN npm install -g @angular/cli
RUN mkdir /usr/src/mngr

COPY ./node /usr/src/mngr/node
COPY ./angular /usr/src/mngr/angular

WORKDIR /usr/src/mngr/node/angular

RUN git config --global user.email "sanele.mpangalala@edgelearningmedia.com"
RUN git config --global user.name "Sanele Mpangalala"

EXPOSE 4200

WORKDIR /usr/src/mngr/node/app

RUN npm install

EXPOSE 3000

CMD ["npm","start"]
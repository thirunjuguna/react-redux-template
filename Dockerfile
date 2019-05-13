# base layer
FROM node:9-alpine AS base

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

# development layer, no dependencies, handled in bin/setup for development
FROM base AS development

COPY . /usr/src/app

CMD npm run start-dev

# test layer, all dependencies
FROM base AS test

RUN yarn install

COPY . /usr/src/app

CMD npm test

# release layer, production related dependencies
FROM base AS release

COPY . /usr/src/app

RUN \
  yarn install --only=production && \
  yarn cache clean && \
  rm -rf ~/.yarn-cache && \
  npm cache clean --force && \
  rm -rf ~/.npm

COPY . /usr/src/app

CMD npm run release

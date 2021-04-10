ARG NODE_ENV=production

FROM node:14.15.0-alpine as build

WORKDIR /usr/src/app

COPY . .

RUN yarn install --production=false --silent

RUN yarn build


FROM node:14.15.0-alpine

WORKDIR /usr/src/app

RUN mkdir server client

COPY package.json yarn.lock ./

COPY ./server/package.json ./server
COPY --from=build ["./usr/src/app/server/build", "./server/build"]

COPY ./client/package.json ./client
COPY --from=build ["./usr/src/app/client/build", "./client/build"]

RUN yarn install --production=true --silent

EXPOSE 8080

ENTRYPOINT [ "yarn", "start" ]
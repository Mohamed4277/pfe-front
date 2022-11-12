FROM node:16.14
WORKDIR /react-app
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn run build
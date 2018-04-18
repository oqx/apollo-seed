FROM node:9.8.0-alpine

RUN mkdir -p /seed
WORKDIR /seed

COPY . /seed
COPY package.json .

RUN npm install

CMD [ "npm", "start" ]

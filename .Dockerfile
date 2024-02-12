FROM node:20-alpine

WORKDIR /home/node/ts-restapi

RUN npm install

COPY . ./app

EXPOSE 9090
CMD npm run dev
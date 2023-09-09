FROM node:18.06

WORKDIR /client-app

cd ./client-app

COPY . .

yarn


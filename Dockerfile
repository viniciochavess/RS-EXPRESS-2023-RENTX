FROM node:22.13.0-slim

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm" , "run" , "start"]
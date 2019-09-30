FROM node:10

WORKDIR /usr/src/app

RUN npm install pm2 -g

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

EXPOSE 6379

CMD ["pm2-runtime", "./ecosystem.config.js", "--only", "client-bff"]
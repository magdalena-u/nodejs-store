FROM node:latest

WORKDIR /backend

COPY ./package-lock.json ./
COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
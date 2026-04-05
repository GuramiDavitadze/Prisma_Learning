FROM node:24-alpine

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3008

CMD npx tsx index.ts
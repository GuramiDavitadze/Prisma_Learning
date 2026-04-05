FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3008

CMD npx tsx watch index.ts
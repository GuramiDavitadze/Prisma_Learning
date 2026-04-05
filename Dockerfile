FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3008

CMD npx prisma generate && npx prisma migrate deploy && npx tsx index.ts
FROM node:lts-slim

WORKDIR /app

COPY package.json yarn.lock ./

RUN npm install --frozen-lockfile

COPY src ./src

ENV DATABASE_URL file:../../../db.development.sqlite
RUN npm run db:generate
RUN npm run db:migrate

CMD [ "npm", "run", "serve" ]
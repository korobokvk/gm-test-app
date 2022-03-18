FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
COPY .env ./dist/.env

FROM node:16-alpine


WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=0 /app/dist ./dist
EXPOSE 8880
CMD [ "npm", "start"]
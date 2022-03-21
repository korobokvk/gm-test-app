FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

FROM node:16-alpine

ENV PORT=8080
ENV HOST=localhost

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=0 /app/dist ./dist
EXPOSE 8080
CMD [ "npm", "run", "start:prod"]
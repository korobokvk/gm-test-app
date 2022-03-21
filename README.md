# Basic usage

## Before you run this app make sure that you set properly value to ENV

- Set you AWS keys
- Create public bucket on S3
- Set bucket configs to env variable

`.env` file used only for development to tun app on prod with you credentials set credentials to Dockerfiles

## Run NestJS apps

To run Nestjs app in prod mode just run in root directory `docker-compose up --build`

## Run React app

Inside FE directory just run `npm start` and open `localhost:3000`
Before running app make sure that all modules was installed successfully

About an app

Both BE services was written with NestJS. To serve data I used GraphQL with Apollo server. To deliver notification about uploading status I used GraphQL pub sub. To be able to get client service know when and what status should this service send to react app I send graph request.

On React app I didn't spend time to cool UI, but I believe my implementation is easy to use :)

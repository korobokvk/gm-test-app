# Basic usage

## Before you run this app make sure that you set properly value to ENV

- Set you AWS keys
- Create public bucket on S3
- Set bucket configs to env variable

`Note: be sure that you pulled and updated all submodules in this repo`

`.env` file used only for development to tun app on prod with you credentials set credentials to Dockerfiles

## Run NestJS apps

To run Nestjs app in prod mode just run in root directory `docker-compose up --build`

## How work uploading file

To upload file you should use `localhost:8880/graphql` and `uploadFile($files: [Upload!]!)` mutation. This mutation call `uploadFile` method and pass data with `createReadStream` method which provide with `graphql-upload` library in middleware that responsible for file management in graphql. After uploading all files was finished successfully app send notification to client service with operation status.

## Run React app

Inside FE directory just run `npm start` and open `localhost:3000`
Before running app make sure that all modules was installed successfully

About an app

Both BE services was written with NestJS. To serve data I used GraphQL with Apollo server. To deliver notification about uploading status I used GraphQL pub sub. To be able to get client service know when and what status should this service send to react app I send graph request.

On React app I didn't spend time to cool UI, but I believe my implementation is easy to use :)

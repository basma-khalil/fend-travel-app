# FEND Capstone - Travel App

This is my Udacity Front End Nanodegree Capstone project

## Table of Contents

- [FEND Capstone - Travel App](#fend-capstone---travel-app)
  - [Table of Contents](#table-of-contents)
  - [Instructions](#instructions)
  - [Project Specification](#project-specification)
  - [Extend Options](#extend-options)
  - [Installation](#installation)
  - [Project Dependencies](#project-dependencies)
  - [Content Sources License](#content-sources-license)

## Instructions

This project requires building a travel app that, at a minimum, obtains a desired trip location & date from the user and displays weather and an image of the location using information obtained from external APIs.

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Project Specification

You can review **project rubric** from [here](https://review.udacity.com/#!/rubrics/2669/view "Go to link").

## Extend Options

* Add end date and display length of trip.

* Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).

* Integrate the REST Countries API to pull in data for the country being visited.

* Allow the user to remove the trip.

* Incorporate icons into forecast.

* Allow the user to add additional trips:

	* Change expired trips style so it’s clear it’s expired.

## Installation

To get started, you need [node.js](https://nodejs.org/en/download "Go to link") and npm installed on your local machine.

Once you have that set-up, just run: `npm install` in your project directory.

* __To create "dist" folder run:__

  `npm run build-prod`

* __To start the project in the development environment with "webpack-dev-server" live preview:__

  `npm run build-dev`

* __To start the server run:__

  `npm start`

  _\* The project is running on localhost: 8081_

* __To start Jest test run:__

  `npm test`

  _\* Please close the server before running jest to pass the test_

## Project Dependencies

* **dependencies:**

    core-js: ^3.6.5,
    cors: ^2.8.5,
    dotenv: ^8.2.0,
    express": "^4.17.1,
    mini-css-extract-plugin: ^0.9.0,
    moment: ^2.25.3,
    optimize-css-assets-webpack-plugin: ^5.0.3,
    regenerator-runtime: ^0.13.5,
    supertest: ^4.0.2,
    terser-webpack-plugin: ^2.3.5,
    webpack: ^4.35.3,
    webpack-cli: ^3.3.5,
    workbox-webpack-plugin: ^5.1.2

* **devDependencies:**

    @babel/core: ^7.5.4,
    @babel/preset-env: ^7.5.4,
    autoprefixer: ^9.7.6,
    babel-eslint: ^10.1.0,
    babel-jest": ^25.3.0,
    babel-loader: ^8.0.6,
    clean-webpack-plugin: ^3.0.0,
    css-loader: ^3.4.2,
    eslint: ^6.8.0,
    eslint-loader: ^4.0.0,
    file-loader: ^6.0.0,
    html-webpack-plugin: ^3.2.0,
    jest: ^25.2.7,
    node-sass: ^4.13.1,
    postcss-loader: ^3.0.0,
    sass-loader: ^8.0.2,
    style-loader: ^1.1.3,
    webpack-bundle-analyzer: ^3.6.1,
    webpack-dev-server: ^3.7.2

## Content Sources License

* Favicon "Airplane Around Earth" free icon made by [Freepik](https://www.flaticon.com/authors/freepik "Go to link") from from [www.flaticon.com](https://www.flaticon.com "Go to link").

* Intro "Collection of lettering travel badges" Free Vector created by [pikisuperstar - www.freepik.com](https://www.freepik.com/free-photos-vectors/ribbon "Go to link")

* [Feather](https://feathericons.com "Go to link") open source icons.

* Flat world tourism day with landmarks transport vector created by pikisuperstar - [www.freepik.com](https://www.freepik.com/free-photos-vectors/background "Go to link").

* [404 Vectors by Vecteezy](https://www.vecteezy.com/free-vector/404 "Go to link").
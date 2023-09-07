## Progressive Web Applications (PWA) - Just Another Text Editor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Just Another Text Editor (J.A.T.E) is a web text editor enabling the user to create notes or code snippets online or offline. Inputs are stored in the Cache Database and user can reliably retrieve them. The integrated service worker and Cache API's ensure that the application will remain fully functional when offline.

## Deployment

The application has been deployed to Heroku -

https://arcane-dusk-51452-196190da4f36.herokuapp.com/

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Technologies Used](#technologies-used)
-   [License](#license)
-   [Questions](#questions)

## Installation

`git clone` the repo to your local machine. After the repo is cloned, run the following command in the terminal:

    npm install

Then run the following command:

    npm start

## Usage

In the application, you are able to enter text or code snippets. Once entered in the text editor, it will be saved into the Database. It will GET all the text entered when refreshed, reopened, or offline.

There is a button on the top left corner `Install!`. This will download the application on to your local machine, allowing the user to use it without using the browser.

## Technologies Used

-   express.js
-   webpack
-   babel-loader
-   css-loader
-   concurrently
-   idb

## License

This application is licensed under the terms of the MIT license.

## Questions

For any question, please contact me on GitHub: [kyungkwon01](https://github.com/kyungkwon01) or email me at kyungkwon01@gmail.com.

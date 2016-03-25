# Markpad

## Build

* `npm install`
* `bower install`

To run test commands, you will need to globally install grunt-cli and nodemon:
* `npm install -g grunt-cli`
* `npm install -g nodemon`

For front-end changes: `grunt sass`

## Run

* `npm run start-dev` and navigate to [localhost:3000](http://localhost:3000/)

## Test

* Karma Angular unit tests: `npm run test-karma`
* Protractor: (in separate terminal panes)
```sh
$ webdriver-manager start
$ npm run start-test
$ npm run test-protractor
```

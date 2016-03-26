# Markpad

## Build

* `npm install`

To run test commands, you will need to globally install grunt-cli and nodemon if you haven't already:
* `npm install -g grunt-cli`
* `npm install -g nodemon`

For front-end changes: `grunt sass`

## Run

* `npm run start-dev` and navigate to [localhost:3000](http://localhost:3000/)

## Test

* Front-end unit tests: `npm run test-karma`
* Back-end unit tests: `npm run test-mocha`
* End-to-end testing: (run the following in separate terminal panes)
```sh
$ webdriver-manager start
# in separate terminal pane
$ npm run start-test
# in separate terminal pane
$ npm run test-protractor
```
* To run the entire suite, ensure you have `webdriver-manager` and the test server running in the background as above, and run `npm run test-everything`

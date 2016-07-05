# SuperMarkIt

Welcome to the markdown revolution: SuperMarkIt is a lightweight online notepad that uses the awesome power of markdown to declutter your writing experience. A good notepad is like removable storage for the brain!

🚧 This is a work in progress, please bear 🐻 with us while we clean a few things up! 🚧

## Objectives

We built this MEAN stack app as our final project at [Makers Academy](www.makersacademy.com) to combine the awesome power of Evernote and OneNote with the simplicity of writing apps like iA Writer and Day One. Our objectives were to:
* build a functioning web app from scratch
* explore the mean, lean power of Mongo, Express.js, AngularJS and Node.js
* level-up our agile skills using TDD, pair-programming, GitHub + Waffle.io and regular stand-ups and retros
* build something beautiful

<img src="/screenshots/landing_page.png" width="720" alt="Landing Page">

<img src="/screenshots/note_list.png" width="720" alt="Note List">

<img src="/screenshots/note_editor.png" width="720" alt="Note Editor">

## Technologies

#### Core
* Node.js
* Express.js
* AngularJS
* MongoDB
* Sass

#### Testing Frameworks
* Karma
* Mocha + Chai
* Protractor

#### Third-party ❤
* [Marked](https://github.com/chjj/marked), an lighting-fast markdown parser and compiler
* [Ace](https://ace.c9.io/#nav=about), Cloud9's very own online editor

## Team

Built by Markdown Squad:
* [Mic Cassano](https://github.com/mic-css)
* [Matt Bridges](https://github.com/Itsindigo)
* [Constantin Kalinin](https://github.com/tishayaem)
* [Jeremy Barrass](https://github.com/Jeremy-Barrass)
* [Chris Terry](https://github.com/2blastoff)

## Instructions

Clone this repo and have fun rummaging around!
```sh
$ git clone https://github.com/mic-css/supermarkit.git
$ cd supermarkit
```

#### Build

Install or update any dependencies: (this may take a minute or two)
* `npm install`

To run test commands, you will need to globally install grunt-cli and nodemon if you haven't already:
* `npm install -g grunt-cli`
* `npm install -g nodemon`

For front-end changes:
* `grunt sass`

#### Run

* `npm install -g node-mongo-seeds` install node-mongo-seeds to seed the database
* `npm run start-dev` and navigate to [localhost:3000](http://localhost:3000/)

#### Test

Front-end unit tests:
* `npm run test-karma`

Back-end unit tests:
* `npm run test-mocha`

End-to-end testing: (run the following in separate terminal panes)
```sh
$ webdriver-manager start
# in separate terminal pane
$ npm run start-test
# in separate terminal pane
$ npm run test-protractor
```
To run the entire suite, ensure you have `webdriver-manager` and the `test` server running in the background as above, and run `npm run test-everything`

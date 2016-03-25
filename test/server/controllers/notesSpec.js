'use strict';

var mongoose = require('mongoose');
var frisby = require('frisby');

var URL = 'http://localhost:3000/notes/'

beforeEach(function() {
  mongoose.connect('mongodb://localhost/markpad-test', function() {
    mongoose.connection.db.dropDatabase();
  });
});

afterAll(function() {
  mongoose.connect('mongodb://localhost/markpad-test', function() {
    mongoose.connection.db.dropDatabase();
  });
});

frisby.create('api call to add a note')
  .post(URL, {
    title: 'My first note',
    content: 'This is the first markpad note evah!!'
  })
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({
    message: 'Note saved!'
  })

  .after(function() {
  frisby.create('the previous note should be displayed in a list of notes')
    .get(URL)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON('?', {
      title: 'My first note',
      content: 'This is the first markpad note evah!!'
    })
  .toss();
  })
.toss();

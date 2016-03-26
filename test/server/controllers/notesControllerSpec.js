process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');
var should = chai.should();

var app = require('../../../app.js');
var Note = require('../../../app/models/notes.js');

chai.use(chaiHttp);

mongoose.connect('mongodb://localhost/markpad-test', function (err, res) {
  if (err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + 'mongodb://localhost/markpad-test');
  }
});

describe('Notes', function() {
  'use strict';

  Note.collection.drop();

  beforeEach(function(done){
    var newNote = new Note({
      title: 'A Title',
      content: 'content'
    });

    newNote.save(function(err) {
      if (err) {
        console.log('Error saving to database:', err);
      } else {
        done();
      }
    });
  });

  afterEach(function(done){
    Note.collection.drop();
    done();
  });

  it('should add a SINGLE note on /notes POST', function(done) {
    chai.request(app)
      .post('/notes')
      .send({'title': 'A Title', 'content': 'Some stuff'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('SUCCESS');
        res.body.SUCCESS.should.be.a('object');
        res.body.SUCCESS.should.have.property('title');
        res.body.SUCCESS.should.have.property('content');
        res.body.SUCCESS.should.have.property('_id');
        res.body.SUCCESS.title.should.equal('A Title');
        res.body.SUCCESS.content.should.equal('Some stuff');
        done();
      });
  });
});

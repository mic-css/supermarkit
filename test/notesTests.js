'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var request = require('request');
var should = chai.should();
var app = require('../app.js');
var Note = require('../app/models/notes.js');

chai.use(chaiHttp);

describe('Notes', function() {

  Note.collection.drop();

  beforeEach(function(done){
    var newNote = new Note({
      title: 'A Title',
      content: 'content'
    });
    newNote.save(function(err) {
      done();
    });
  });
  afterEach(function(done){
    Note.collection.drop();
    done();
  });
});

describe('Blobs', function() {
  it('should add a SINGLE note on /notes POST');
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

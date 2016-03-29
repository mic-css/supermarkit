process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

var app = require('../../../app.js');
var Note = require('../../../app/models/notes.js');

chai.use(chaiHttp);

describe('Notes', function() {
  'use strict';

  var note;

  Note.collection.drop();

  beforeEach(function(done){
    note = new Note({
      title: 'Note Title',
      content: 'Example note body'
    });

    note.save(function(err) {
      if (err) {
        console.log('Error saving to database:', err);
      } else {
        done();
      }
    });
  });

  afterEach(function (done) {
    Note.collection.drop();
    done();
  });

  it('should return all notes on /api/notes GET', function (done) {
    chai.request(app)
      .get('/api/notes')
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });

  it('should return a note on /api/notes/:id GET', function (done) {
    chai.request(app)
      .get('/api/notes/' + note.id)
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('_id');
        res.body.should.have.property('title');
        res.body.should.have.property('content');
        res.body.title.should.equal('Note Title');
        res.body.content.should.equal('Example note body');
        res.body._id.should.equal(note.id);
        done();
      });
  });

  it('should add a note on /api/notes POST', function (done) {
    var newNote = {
      'title': 'Note Title',
      'content': 'Example note body'
    };

    chai.request(app)
      .post('/api/notes')
      .send(newNote)
      .end(function (err, res) {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('SUCCESS');
        res.body.SUCCESS.should.be.a('object');
        res.body.SUCCESS.should.have.property('_id');
        res.body.SUCCESS.title.should.equal(newNote.title);
        res.body.SUCCESS.content.should.equal(newNote.content);
        done();
      });
  });

  it('should update a note on /api/notes/:id PUT', function (done) {
    chai.request(app)
    .get('/api/notes/'+note.id)
    .end(function (err, res) {
      chai.request(app)
      .put('/api/notes/'+res.body._id)
      .send({'content': 'Note updated'})
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('UPDATED');
        res.body.UPDATED.content.should.equal('Note updated');
        done();
      });
    });
  });

  it('should delete a note on /api/notes/:id DELETE', function(done) {
    chai.request(app)
      .get('/api/notes/'+note.id)
      .end(function (err, res) {
        chai.request(app)
          .delete('/api/notes/'+res.body._id)
          .end(function (err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('DELETED');
            res.body.DELETED.should.be.a('object');
            res.body.DELETED.should.have.property('_id');
            res.body.DELETED.title.should.equal(note.title);
            res.body.DELETED.content.should.equal(note.content);
            done();
        });
      });
  });
});

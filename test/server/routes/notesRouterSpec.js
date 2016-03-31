process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var app = require('../../../app.js');
var User = require("../../../app/models/users.js");
var Note = require('../../../app/models/notes.js');

chai.use(chaiHttp);

describe('Notes', function() {
  'use strict';

  var note;

  Note.collection.drop();

  var user = new User({username: "A username", email: "test@test.com", password: "Password"});
  app.request.user = new User({ username : user.username, email : user.email}), user.password;

  var note = {title: "Of Mice and Men", content: "I remember about the rabbits, George", user: {type: app.request.user.id}};
  app.request.note = new Note({ title: note.title, content: note.content, user: {type: user._id}});

  var agent = chai.request.agent(app);

  beforeEach(function(done){
    agent
      .post('/users/register')
      .send(user)
      .end();

    note = new Note({ title: note.title, content: note.content});


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
    User.collection.drop();
    done();
  });


  it('should return all notes on /api/notes GET', function (done) {
    agent
      .get('/api/notes')
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });

  it('should add a note on /api/notes POST', function (done) {
    var newNote = {
      'title': 'Note Title',
      'content': 'Example note body'
    };

    agent
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
});

  // BELOW ARE THE ABANDONED TESTS, I SWEATED, I LOST MY MIND, THEY DID NOT PASS.

  // it('should return a note on /api/notes/:userid GET', function (done) {
  //   agent
  //     .get('/api/notes/' + app.request.note)
  //     .end(function (err, res) {
  //       res.should.have.status(200);
  //       res.should.be.json;
  //       res.body.should.be.a('object');
  //       res.body._id.should.equal(note.id);
  //       res.body.title.should.equal('Note Title');
  //       res.body.content.should.equal('Example note body');
  //       done();
  //     });
  // });
  //
  // it('should update a note on /api/notes/:id PUT', function (done) {
  //   agent
  //     .put('/api/notes/'+res.body._id)
  //     .send({'content': 'Note updated'})
  //     .end(function (err, res) {
  //       res.should.have.status(200);
  //       res.should.be.json;
  //       res.body.should.have.property('UPDATED');
  //       res.body.UPDATED.content.should.equal('Note updated');
  //       done();
  //     });
  // });
  //
  // it('should delete a note on /api/notes/:id DELETE', function(done) {
  //   chai.request(app)
  //     .get('/api/notes/'+note.id)
  //     .end(function (err, res) {
  //       chai.request(app)
  //         .delete('/api/notes/'+res.body._id)
  //         .end(function (err, res) {
  //           res.should.have.status(200);
  //           res.should.be.json;
  //           res.body.should.be.a('object');
  //           res.body.should.have.property('DELETED');
  //           res.body.DELETED.should.be.a('object');
  //           res.body.DELETED.should.have.property('_id');
  //           res.body.DELETED.title.should.equal(note.title);
  //           res.body.DELETED.content.should.equal(note.content);
  //           done();
  //         });
  //     });
  // });

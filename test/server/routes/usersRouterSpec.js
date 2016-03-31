process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');
var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var app = require('../../../app.js');
var User = require('../../../app/models/users.js');

describe('User', function() {
  'use strict';

  var user;

  User.collection.drop();

  before(function (done) {
    user = {username: "Username", email: "test@test.com", password: "Password1234"};
    User.register(new User({ username : user.username, email : user.email }), user.password, function(err, user) {});
    done();
  });

  after(function (done) {
    User.collection.drop();
    done();
  });

  it('should register a new user on users/register', function (done) {
    chai.request(app)
      .post('/users/register')
      .send(user)
      .end(function (err, res) {
        res.should.be.json;
        res.body.should.have.property('info');
        res.body.info.should.equal('success');
        res.should.have.status(200);
        done();
      });
  });


  it('should log in with an existing user', function (done) {
    chai.request(app)
      .post('/users/login')
      .send(user)
      .end(function (err, res) {
        res.should.be.json;
        res.body.should.have.property('info');
        res.body.info.should.equal('Login Successful');
        res.should.have.status(200);
        done();
      });
  });

  it('should not allow a user to register an email already in the database.', function (done) {
    chai.request(app)
      .post('/users/register')
      .send(user)
      .end(function (err, res) {
        res.should.be.json;
        res.should.have.status(400);
        res.body.should.have.property('error');
        res.body.error.message.should.include('User already exists with username Username');
        done();
      });
  });

  it('should not allow a user to register without a username', function(done){
    user = {username: "", email: "test@test.com", password: "Password"};
    chai.request(app)
      .post('/users/register')
      .send(user)
      .end(function (err, res) {
        res.should.be.json;
        res.body.should.have.property('error');
        res.body.error.message.should.include('Field username is not set');
        res.should.have.status(400);
        done();
      });
  });

  it('should not allow a user to register without a password', function(done){
    user = {username: "Username2", email: "test@test.com", password: ""};
    chai.request(app)
      .post('/users/register')
      .send(user)
      .end(function (err, res) {
        res.should.be.json;
        res.body.should.have.property('error');
        res.body.error.message.should.include('Password argument not set');
        res.should.have.status(400);
        done();
      });
  });

});

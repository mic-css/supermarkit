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
    user = {username: "Username", email: "test@test.com", password: "Password"};
    User.register(new User({ username : user.username, email : user.email }), user.password, function(err, user) {});
    done();
  });

  after(function (done) {
    User.collection.drop();
    done();
  });

  it('should register a new user on users/signup', function (done) {
    chai.request(app)
      .post('/users/signup')
      .send(user)
      .end(function (err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.info.should.equal('Signed up successfully');
        done();
      });
  });

  it('should log in an existing user', function (done) {
    chai.request(app)
      .post('/users/login')
      .send(user)
      .end(function (err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.info.should.equal('Logged in successfully');
        done();
      });
  });

  it('should log out the current user', function (done) {
    chai.request(app)
      .get('/users/logout')
      .send()
      .end(function (err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.info.should.equal('Logged out successfully');
        done();
      });
  });

  it('should not a allow a user to signup on a used email', function (done) {
    chai.request(app)
      .post('/users/signup')
      .send(user)
      .end(function (err, res) {
        res.should.be.json;
        res.should.have.status(400);
        done();
      });
  });
});

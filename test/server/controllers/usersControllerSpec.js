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

  it('should register a new user on users/register', function (done) {
    chai.request(app)
      .post('/users/register')
      .send(user)
      .end(function (err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.should.have.property('info');
        res.body.info.should.equal('success');
        done();
      });
  });


  it('should log in with an existing user', function (done) {
    chai.request(app)
      .post('/users/login')
      .send(user)
      .end(function (err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.should.have.property('info');
        res.body.info.should.equal('Login Successful');
        done();
      });
  });

  it('should not a allow a register to signup on a used email', function (done) {
    chai.request(app)
      .post('/users/register')
      .send(user)
      .end(function (err, res) {
        res.should.be.json;
        res.should.have.status(500);
        done();
      });
  });
});

'use strict';

process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');
var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var app = require('../../../app.js');
var User = require("../../../app/models/users.js");


chai.use(chaiHttp);

describe('User', function() {
  var user = {username: "A username", email: "test@test.com", password: "Password"};

  User.collection.drop();

  beforeEach(function(done){
    User.register(new User({ username : user.username, email : user.email }), user.password, function(err, user) {});
    done();
  });

  it("should register a new user on users/register", function(done){
    var newUser = {
      username: "Matt",
      email: "Matt@test.com",
      password: 'password'
    };

    chai.request(app)
      .post('/users/register')
      .send(newUser)
      .end(function(err, res){
        res.should.be.json;
        res.should.have.status(200);
        res.body.should.have.property('info');
        res.body.info.should.equal('success');
        done();
      });
  });


  it("should log in with an existing user", function(done){
    chai.request(app)
      .post('/users/login')
      .send(user)
      .end(function(err, res){
        res.should.be.json;
        res.should.have.status(200);
        res.body.should.have.property('info');
        res.body.info.should.equal('Login Successful');
        done();
      });
  });

  it("should not a allow a register to signup on a used email", function(done){
    chai.request(app)
      .post('/users/register')
      .send(user)
      .end(function(err, res){
        res.should.be.json;
        res.should.have.status(500);
        done();
      });
  });
});

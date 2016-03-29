'use strict';

process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');
var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var app = require('../../../app.js');
var User = require("../../../app/models/users.js");


// var server = chai.use('localhost:3000');

describe('User', function() {
  var user;

  User.collection.drop();

  beforeEach(function(done){
    user = new User({
      username: 'test',
      email: 'test@test.test',
      password: 't3sty'
    });

    user.save(function(err){
      if (err) {
        console.log("Error saving user to database: ", err);
      } else {
        done();
      }
    });
  });

  afterEach(function(done){
    User.collection.drop();
    done();
  });
//   it('should return an ok response', function() {
//     chai.request(app)
//     .post('/users/register')
//   });
});

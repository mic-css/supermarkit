process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');
var chai = require('chai');
var should = chai.should();
var app = require('../../../app.js');
var User = require('../../../app/models/users.js');

describe('User', function() {
  'use strict';

  var user;

  before(function(done) {
    User.collection.drop();
    done();
  });

  after(function(done) {
    User.collection.drop();
    done();
  });

  it('should validate the username as present', function(done) {
    user = new User({ username: "", email: "test@test.com", password: "Password" });
    user.should.respondTo('save');
    user.save(function(err) {
      console.log(err.errors.username.message);
      err.should.exist;
      console.log(err.errors.username.message.should.equal('Username is required.'));
      console.log('Here kitty kitty');
    });
    done();
  });
});

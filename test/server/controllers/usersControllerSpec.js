process.env.NODE_ENV = 'test';
var mongoose = require('mongoose');
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../../../app.js');
var User = require("../../../app/models/users.js");

describe('User', function() {
  beforeEach(function(done) {
      var user = new User({
          username: '12345',
          email: 'test@test.com',
          password: 'testy'
      });
      user.save(function(error) {
          if (error) console.log('error' + error.message);
          else console.log('no error');
          done();
      });
  });

  it('find a user by username', function(done) {
      User.findOne({ username: '12345' }, function(err, user) {
          User.username.should.eql('12345');
          console.log("   username: ", user.username);
          done();
      });
  });

  afterEach(function(done) {
      User.remove({}, function() {
          done();
      });
   });
});

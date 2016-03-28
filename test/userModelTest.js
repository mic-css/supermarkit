'use strict';

var chai = require('chai');
var mongoose = require('mongoose');
var user = require('../app/models/users.js');
var entry = {
  name: 'tiny',
  email: 'teeny',
  password: 'test',
};

var assert = chai.assert;
var expect = chai.expect;

describe('Users', function(){
  it('creates a user', function(){
    user.create(entry, 200);
    assert.equal(res, 'User saved.');
  });
});

'use strict';

var chai = require('chai');
var mongoose = require('mongoose');
var ctrl = require('../app/controllers/signUpController.js');

var assert = chai.assert;
var expect = chai.expect;

describe('signUpController', function(){
  it('exists', function(){
    assert.isOk(ctrl.controller, 'controller is there.');
  });
});

'use strict';

var user = require('../models/users.js');
var mongoose = require('mongoose');

var controller = function(){
  this.store = function(req, res) {
    user.create(req, res);
  };
};


module.exports = controller;

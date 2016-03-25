var user = require('../models/users.js');
var mongoose = require('mongoose');

var controller = "hello";

controller.store = function(req, res) {
  user.create(req, res);
};

module.exports = controller;

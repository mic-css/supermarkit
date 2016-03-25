var user = require('../models/users.js');
var mongoose = require('mongoose');

var controller = {};

controller.store = function(req, res) {
  user.create(req, res);
};

module.export = controller;

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name      : String,
  email     : String,
  password  : String
});

this.create = function(req, res) {
  userSchema.name = req.body.name;
  userSchema.email = req.body.email;
  userSchema.password = req.body.password;
  userSchema.save(function(err){
    if (err) {
      res.send(err);
    }
    res.json({message: 'User saved.'});
  });
};

module.export = mongoose.model('User', userSchema);

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
  username  : String,
  email     : String,
  password  : String
});

userSchema.plugin(passportLocalMongoose);

// this.create = function(req, res) {
//   userSchema.name = req.body.name;
//   userSchema.email = req.body.email;
//   userSchema.password = req.body.password;
//   userSchema.save(function(err){
//     if (err) {
//       res.send(err);
//     }
//     res.json({message: 'User saved.'});
//   });
// };

module.exports = mongoose.model('User', userSchema);

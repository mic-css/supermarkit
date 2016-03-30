'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
  username  : { type: String, required: 'Username is required.',
  minlength: [3, 'Username must be three characters or longer.'] },
  email     : { type: String, required: 'Email is required.' },
  password  : String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);

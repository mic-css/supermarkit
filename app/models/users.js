'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
  username  : { type: String, required: 'Username is required.',
                minlength: [3, 'Username must be three characters or longer.'] },
  email     : { type: String, required: 'Email is required.',
                validate: {
                  validator: function(email) {
                    return /\w+@\w+\.\w+/.test(email);
                  },
                  message: 'Please enter a correct email address.'
                } },
  password  : { type: String, required: 'Password is required.',
                minlength: [12, 'Password must be at least 12 characters long.']}
});

// userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);

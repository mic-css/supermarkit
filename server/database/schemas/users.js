/**
* Our schema for users
*/

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Define user schema
var userSchema = new Schema({
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  profile: {},
  notes: {}
});

// A method that's called everytime the user document is saved:
userSchema.pre('save', function(next){
  var user = this;

  // If the password is unmodified, jump to the next one.
  if (!user.isModified('password')) {
    return next();
  }

  // Generate salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    //Create and store hash.
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

//Primary user model
var User = mongoose.model('User', userSchema);

module.exports = User;

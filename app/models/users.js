var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name      : String,
  email     : String,
  password  : String
});

this.create = function(req, res) {

};

module.export = mongoose.model('User', userSchema);

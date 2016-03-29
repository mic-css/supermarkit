var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notesSchema = new Schema({
  title: String,
  content: String,
  user: {
    type: Schema.ObjectId,
    ref: 'users'
  },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notes', notesSchema);

var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notes', noteSchema);

var Note = require ('../models/notes.js');

var controller = {};

controller.create = function(req, res) {
  var note = new Note();
  note.title = req.body.title;
  note.content = req.body.content;
  note.save(function(err){
    if (err) {
      res.send(err);
    } else {
      res.status(200)
      res.json({ message: "Note saved!" });
    }
  });
};

controller.list = function(req, res) {
  Note.find(function(err, notes){
    if (err) {
      res.send(err);
    } else {
      res.json(notes);
    }
  });
}

module.exports = controller;

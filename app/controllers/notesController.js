var express = require('express');
var router = express.Router();
var Note = require ('../models/notes');

router.get('/', getNotes);
router.get('/:id', getNote);
router.post('/', addNote);
// router.put('/:id', updateNote);
// router.delete('/:id', deleteNote);

function getNotes(req, res) {
  Note.find(function (err, notes) {
    if (err) {
      res.json({'ERROR': err});
    } else {
      res.json(notes);
    }
  });
}

function getNote(req, res) {
  Note.findById(req.params.id, function (err, note) {
    if (err) {
      res.json({'ERROR': err});
    } else {
      res.json(note);
    }
  });
}

function addNote(req, res) {
  var note = new Note({
    title: req.body.title,
    content: req.body.content
  });

  note.save(function(err){
    if (err) {
      res.json({'ERROR': err});
    } else {
      res.status(201).json({'SUCCESS': note});
    }
  });
}

module.exports = router;

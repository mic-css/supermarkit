var express = require('express');
var router = express.Router();
var Note = require ('../models/notes');

router.get('/', getAllNotes);
router.get('/:id', getNote);
router.post('/', addNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

function getAllNotes(req, res) {
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
  var newNote = new Note({
    title: req.body.title,
    content: req.body.content
  });

  newNote.save(function(err){
    if (err) {
      res.json({'ERROR': err});
    } else {
      res.status(201).json({'SUCCESS': newNote});
    }
  });
}

function updateNote(req, res) {
  Note.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function (err, note) {
    if (err) {
      res.json({'ERROR': err});
    } else {
      res.status(200).json({'UPDATED': note});
    }
  });
}

function deleteNote(req, res) {
  Note.findByIdAndRemove(req.params.id, function (err, note) {
    if (err) {
      res.json({'ERROR': err});
    } else {
      res.status(200).json({'DELETED': note});
    }
  });
}

module.exports = router;

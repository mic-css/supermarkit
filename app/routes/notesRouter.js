'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Note = require ('../models/notes');

function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401);
        res.redirect('/');
    }
}


router.get('/', loggedIn, function (req, res) {
  Note.find(function (err, notes) {
    if (err) {
      return res.json({'ERROR': err});
    } else {
      return res.json(notes);
    }
  });
});

router.post('/', loggedIn, function (req, res) {
  var newNote = new Note({
    title: req.body.title,
    content: req.body.content,
    user: req.user.id
  });

  newNote.save(function (err) {
    if (err) {
      res.json({'ERROR': err});
    } else {
      res.status(201).json({'SUCCESS': newNote});
    }
  });
});


router.get('/:userId', loggedIn, function (req, res) {
  mongoose.model('notes').find({user: req.params.userId}, function(err, notes) {
    if (req.user._id.toString() !== req.params.userId) {
      res.json({'ERROR': "THESE ARE NOT YOUR NOTES"});
    } else {
      mongoose.model('notes').populate(notes, {path: 'user'}, function(err, notes){
        res.send(notes);
      });
    }
  });
});


router.put('/:userId/:id', loggedIn, function (req, res) {
  Note.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function (err, note) {
    if (req.user._id.toString() === req.params.userId) {
      res.status(200).json({'UPDATED': note});
    } else {
      res.json({'ERROR': 'THIS IS NOT YOUR NOTE TO EDIT'});
      res.status(401);
    }
  });
});

router.delete('/:userId/:id', loggedIn, function (req, res) {
  Note.findByIdAndRemove(req.params.id, function (err, note) {
    if (req.user._id.toString() === req.params.userId) {
      res.status(200).json({'DELETED': note});
    } else {
      res.json({'ERROR': 'THIS IS NOT YOUR NOTE TO DELETE'});
    }
  });
});

module.exports = router;

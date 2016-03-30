'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Note = require ('../models/notes');

router.get('/', function (req, res) {
    if (!req.user){

      return res.status(401).json({'ERROR': "Login in order to view notes"});
    }

    Note.find(function (err, notes) {
      if (err) {
        return res.json({'ERROR': err});
      } else {
        return res.json(notes);
      }
    });
  })

router.post('/', function (req, res) {
    if (!req.user){
      res.status(401).json({'ERROR': "Login in order to post a note"});
      // res.status(401);
    }
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

router.get('/:userId', function (req, res) {
    if (!req.user){
      res.status(401).json({'ERROR': "Login in order to post"});
      // res.status(401);
    }
    mongoose.model('notes').find({user: req.params.userId}, function(err, notes){
      mongoose.model('notes').populate(notes, {path: 'user'}, function(err, notes){
        res.send(notes);
      });
    });
  });


router.get('/:id', function (req, res) {
    if (!req.user){
      res.status(401).json({'ERROR': "Login in order to view a note"});
      // res.status(401);
    }
    Note.findById(req.params.id, function (err, note) {
      if (err) {
        res.json({'ERROR': err});
      } else {
        res.json(note);
      }
    });
  });

router.put('/:id', function (req, res) {
    if (!req.user){
      res.status(401).json({'ERROR': "Login in order to edit a note"});
      // res.status(401);
    }

    Note.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function (err, note) {
      if (err) {
        res.json({'ERROR': err});
        res.status(401);
      } else {
        res.status(200).json({'UPDATED': note});
      }
    });
});

router.delete('/:id', function (req, res) {
    if (!req.user){
      res.status(401).json({'ERROR': "Login in order to delete a note"});
    }
    Note.findByIdAndRemove(req.params.id, function (err, note) {
      if (err) {
        res.json({'ERROR': err});
      } else {
        res.status(200).json({'DELETED': note});
      }
    });
  });


module.exports = router;

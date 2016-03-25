var express = require('express');
var router = express.Router();
var Note = require ('../models/notes');

router.route('/')
  .post(function(req, res) {
    var note = new Note({
      title: req.body.title,
      content: req.body.content
    });
    note.save(function(err){
      if (err) {
        res.status(400).json({'ERROR': err});
      } else {
        res.status(200).json({'SUCCESS': note});
      }
    });
  });


module.exports = router;
  // controller.getNotes = function(req, res) {
  //   Note.find(function(err, notes){
  //     if(err) {
  //       res.json({'ERROR': err});
  //     } else {
  //       res.json(notes);
  //     }
  //   });
  // }

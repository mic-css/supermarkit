var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var notesController = require('../controllers/notesController.js');

router.use(bodyParser.urlencoded({ extended: true }))

var notesRouter = require('../controllers/notesController');
router.route('/notes', notesRouter)

// router.get ('/notes', controller.notes);

module.exports = router;

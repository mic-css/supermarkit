var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var notesController = require('../controllers/notesController.js');

router.use(bodyParser.urlencoded({ extended: true }))

router.route('/').post(notesController.create).get(notesController.list);

module.exports = router;

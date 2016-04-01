var express = require('express');
var router = express.Router();
var path = require('path');
// var passport = require('passport');

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../public/views', 'index.html'), {user: req.user});
});


module.exports = router;

var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../public/views', 'index.html'));
  console.log('someshit');
});

module.exports = router;

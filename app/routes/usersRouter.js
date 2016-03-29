var express = require('express');
var path = require('path');
var passport = require('passport');
var User = require('../models/users.js');
var router = express.Router();

router.post('/register', function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
          res.status(400).json({info: err});
        }

        passport.authenticate('local')(req, res, function () {
            res.status(203).json({info: "success"});
        });
    });
});


router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;

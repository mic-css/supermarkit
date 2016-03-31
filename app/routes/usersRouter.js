'use strict';

var express = require('express');
var path = require('path');
var passport = require('passport');
var User = require('../models/users.js');
var router = express.Router();

router.post('/register', function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
          res.status(500).json({info: err});
        }
        passport.authenticate('local')(req, res, function () {
            res.status(200).json({info: "success"});
        });
    });
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({err: info});
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({err: 'Could not log in user'});
      }
      res.status(200).json({info: 'Login Successful'});
    });
  })(req, res, next);
});

router.get('/logout', function(req, res) {
    req.logout();
    res.status(200).json({status: 'Logged out!'});
});


module.exports = router;

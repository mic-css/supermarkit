'use strict';

var express = require('express');
var path = require('path');
var passport = require('passport');
var User = require('../models/users.js');
var router = express.Router();

router.route('/signup')
  .post(function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
      if (err) {
        return res.status(400).json({info: err});
      }

      passport.authenticate('local')(req, res, function () {
        return res.status(200).json({info: "Signed up successfully"});
      });
    });
  });

router.route('/login')
  .post(function(req, res, next) {

    passport.authenticate('local', function(err, user, info) {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.status(400).json({err: info});
      }

      req.logIn(user, function(err) {
        if (err) {
          return res.status(400).json({err: 'Could not log in user'});
        }

        res.status(200).json({info: 'Logged in successfully'});
      });
    })(req, res, next);
  });

router.route('/logout')
  .get(function(req, res) {
    req.logout();
    res.status(200).json({info: 'Logged out successfully'});
  });

module.exports = router;

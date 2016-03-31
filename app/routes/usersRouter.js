'use strict';

var express = require('express');
var path = require('path');
var passport = require('passport');
var User = require('../models/users.js');
var router = express.Router();

router.route('/register')
  .post(function(req, res) {
    User.register(new User({ username : req.body.username, email: req.body.email, password: req.body.password }), req.body.password, function(err, user) {
      if (err) {
        return res.status(400).json({error: err});
      }

      passport.authenticate('local', 'passport-facebook')(req, res, function () {
        return res.status(200).json({info: "success"});
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

router.route('/login/facebook',
  passport.authenticate('facebook', { scope: 'email' }
));

router.route('/login/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/notes',
    failureRedirect: '/login'
  })
);

router.route('/logout')
  .get(function(req, res) {
    req.logout();
    res.status(200).json({status: 'Logged out!'});
  });

module.exports = router;

'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./_config');
var passport = require('passport'),
    FacebookStrategy = require('passport-facebook');
var LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./app/routes/indexRouter');
var usersRouter = require('./app/routes/usersRouter');
var notesRouter = require('./app/routes/notesRouter');

var app = express();
var db = process.env.MONGOLAB_URI || config.mongoURI[app.settings.env];

// *** mongoose *** ///

mongoose.connect(db, function(err, res) {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + db);
  }
});

// *** views *** ///

app.set('views', './public/views/');
app.set('view engine', 'jade');

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// *** routing *** ///

app.use('/', indexRouter);
app.use('/api/notes', notesRouter);
app.use('/users', usersRouter);

// *** passport config *** ///

var User = require('./app/models/users');
passport.use(new LocalStrategy(User.authenticate()));
passport.use(new FacebookStrategy({
  clientID: '[FBID]',
  clientSecret: '[FBSECRET]',
  callbackURL: '[CALLBACKURI]'
}, function(accessToken, refreshToken, profile, done){
    User.findOrCreate({ facebookId: profile.id }, function(err, user) {
      return done(err, user);
    });
  }));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// *** error handling *** ///

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

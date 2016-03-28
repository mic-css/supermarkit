var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./_config');

var indexRouter = require('./app/routes/indexRouter');
var notesController = require('./app/controllers/notesController');

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

// *** parsing *** ///

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

// *** views *** ///

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

// *** routing *** ///

app.use('/', indexRouter);
app.use('/api/notes', notesController);

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

var express = require('express');
var logger = require('morgan');
const favicon = require('serve-favicon');

var indexRouter = require('./routes/index');
var employeesRouter = require('./routes/employees');
//BOOKS_WITHdb_using_moongose
var app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
// For is a built-in middleware function in Express. 
// // It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false }));
app.use(favicon(__dirname + "/public/images/favicon.png"));

app.use('/', indexRouter);
app.use('/employees', employeesRouter);

// error handler
app.use(function(err, req, res, next) {
  console.log(`${err.stack}`);
  res.status(500).send('Server Error!');
});

module.exports = app;

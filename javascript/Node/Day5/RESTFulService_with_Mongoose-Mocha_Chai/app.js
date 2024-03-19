// Acquire express node package
var express = require('express');
// body-parser is used to parse the request body and populate the req object
var bodyParser = require('body-parser');

// ODM - Object Data Mapping
// Mongoose
var mongoose = require('mongoose');

// Create Express app
var app = express();
app.set('port',3030);
app.use(bodyParser.json());

// Importing booksRoutes
let booksRouter = require('./routes/booksRoutes');
app.use('/books',booksRouter);

// error handler
app.use(function(err, req, res, next) {
    console.log(`${err.stack}`);
    res.status(500).send('Server Error!');
  });
  
// Database connectivity
var dbHost = 'mongodb://localhost:27017/BooksDB';
mongoose.connect(dbHost);

app.listen(app.get('port'),function(){
    console.log('Server up at https://localhost:'+app.get('port'));
});

// To allow CORS - Cross Origin Resrouce Sharing 
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

module.exports = app; // for testing
// Acquire express node package
var express = require('express');

// body-parser is used to parse the request body and populate the req object
var bodyParser = require('body-parser');

// ODM - Object Data Mapping
// Mongoose

var mongoose = require('mongoose');

// Create Express app
var app = express();

app.set('port',3300);
app.use(bodyParser.json());

// Database connectivity
var dbHost = 'mongodb://localhost:27017/BooksDB';
mongoose.connect(dbHost);

//book schema

var bookSchema = mongoose.Schema({
    name:String,
    isbn:{type:String,index:true,unique:true},
    author:String,
    pages:Number
});

var Book = mongoose.model('Book',bookSchema);

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

// Endpoints

// Get all books
app.get('/books',function(req,res){
    Book.find({},function(err,result){
        if(err) throw err;
        res.json(result);
    })
})

// Get book by isbn number
app.get('/books/:isbn',function(req,res){
    console.log("Fetching details for the book with isbn: "+
    req.params.isbn);
    Book.findOne({isbn:req.params.isbn},function(err,result){
        if(err) throw err;
        res.json(result);
    })
})

// Insert a new book
/*app.post('/books',function(req,res){
    console.log('Adding a new book '+req.body.name);
    var book = new Book({
        name:req.body.name,
        isbn:req.body.isbn,
        author:req.body.author,
        pages:req.body.pages
    });

    book.save(function(err,result){
        if(err) throw err;
        res.json({
            message:'Successfully added the book ',book:result
        });
    });
})

// Update an existing book
app.put('/books/:isbn',function(req,res){
    console.log('Updating an existing book with isbn '+req.params.isbn);
    Book.findOne({isbn:req.params.isbn},
        function(err,result){
            if(err) throw err;
            if(!result){
                res.json({
                    message:'Book with ISBN '+req.params.isbn+' not found!'
                })
            }
            result.name = req.body.name,
            result.author = req.body.author,
            result.pages = req.body.pages

            result.save(function(err,result){
                if(err) throw err;
                res.json({
                    message:'Successfully updated the book ',book:result
                });
            });
        })      
})

// Delete a book by isbn
app.delete('/books/:isbn',function(req,res){
    Book.findOneAndRemove({isbn:req.params.isbn},
        function(err,result){
            if(err) throw err;
            res.json({
                message:'Successfuly deleted the Book ',book:result
            });
        });
})*/
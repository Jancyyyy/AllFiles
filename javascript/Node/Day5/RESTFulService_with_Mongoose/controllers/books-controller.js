
// Importing model
let Book = require('../models/book');

// controller methods

// Get All Books
function getBooks(req, res) {
    Book.find({}, function (err, result) {
        if (err) throw err;
        res.json(result);
    })
}

// Get book by isbn number
function getBook(req, res) {
    console.log("Fetching details for the book with isbn: " +
        req.params.isbn);
    Book.findOne({ isbn: req.params.isbn }, function (err, result) {
        if (err) throw err;
        res.json(result);
    })
}

// Insert a new book
function postBook(req, res) {
    console.log('Adding a new book ' + req.body.name);
    var book = new Book({
        name: req.body.name,
        isbn: req.body.isbn,
        author: req.body.author,
        pages: req.body.pages
    });

    book.save(function (err, result) {
        if (err) throw err;
        res.json({
            message: 'Successfully added the book ', book: result
        });
    });
}

// Update an existing book
function updateBook(req, res) {
    console.log('Updating an existing book with isbn ' + req.params.isbn);
    Book.findOne({ isbn: req.params.isbn },
        function (err, result) {
            if (err) throw err;
            if (!result) {
                res.json({
                    message: 'Book with ISBN ' + req.params.isbn + ' not found!'
                })
            }
            result.name = req.body.name,
                result.author = req.body.author,
                result.pages = req.body.pages

            result.save(function (err, result) {
                if (err) throw err;
                res.json({
                    message: 'Successfully updated the book ', book: result
                });
            });
        })
}

// Delete a book by isbn
function deleteBook(req, res) {
    Book.findOneAndRemove({ isbn: req.params.isbn },
        function (err, result) {
            if (err) throw err;
            res.json({
                message: 'Successfuly deleted the Book ', book: result
            });
        });
}

// export all the functions together
module.exports = {getBooks,getBook,postBook,updateBook,deleteBook};
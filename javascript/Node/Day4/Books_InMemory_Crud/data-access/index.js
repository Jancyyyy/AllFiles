let books = [
    { name: 'The God Father',isbn:'isbn123', author:'Mario Puzo',pages:393 },
    { name: 'Panipat',isbn:'isbn434', author: 'Vishwas Patil', pages:275},
    { name: 'Five point Someone',isbn:'isbn333', author:'Chetan Bhagat',pages:270},
    { name: 'The Immortals of Mehula',isbn:'isbn343',author:'Amish Tripathi',pages:257},
    { name: 'Connect the dots',isbn:'isbn534', author:'Rashmi Bansal',pages:335}
];

exports.getAllBooks = function(){
    return books;
}

exports.getBook = function(isbn){
    return books.find(e => e.isbn === isbn);
}

exports.insertBook = function(book){
    books= [...books, {...book}];
    return true;
}

exports.deleteBook = function(isbn){
    books = [...books.filter(e =>e.isbn !== isbn)];
    return true;
}

exports.updateBook = function (book) {
    var itemIndex = books.findIndex(e => e.isbn === book.isbn);
    var tempBooks = [...books];
    tempBooks.splice(itemIndex, 1, { ...book });
    books = [...tempBooks];
    return true;
}
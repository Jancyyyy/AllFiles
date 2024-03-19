const da = require('../data-access');

exports.index = (req,res)=>{
    res.render("books/index", {pageTitle:'Books View',booList:da.getAllBooks()});
}

exports.create_get = (req,res) =>{
    res.render("books/create", {pageTitle:'Books Create View'});
}

exports.create_post = (req,res) =>{
    console.log("Body: ", req.body);
    var { bisbn, bname,bauthor,bpages} = req.body;// Destructuring
    var book = { isbn: bisbn, name: bname , author:bauthor ,pages:parseInt(bpages)};

    if (da.insertBook(book)) {
        res.redirect('/books');
    } else {
        res.render("books/create", { pageTitle: "Books Create View"});
    }
}

exports.details = (req,res)=>{
    let isbn = req.query.isbn || req.params.bisbn;
    res.render("books/details", {pageTitle:'Book Details View',book:da.getBook(isbn)});
}

exports.delete_get = (req,res)=>{
    let isbn = req.query.isbn || req.params.bisbn;
    res.render("books/delete",{pageTitle:'Book Delete View',book:da.getBook(isbn)});
}
exports.delete_post = (req,res)=>{
    let isbn = req.query.isbn || req.params.bisbn;
    if(da.deleteBook(isbn)){
        res.redirect('/books');
    }
    else{
        res.render("books/delete",{pageTitle:'Book Delete View',book:da.getBook(isbn)});
    }
}

exports.edit_get = (req, res) => {
    var isbn = req.query.isbn || req.params.bisbn;
    res.render("books/edit", { pageTitle: "Book Edit View", book: da.getBook(isbn) });
}
exports.edit_post = (req, res) => {
    console.log("Body: ", req.body);
    var { bisbn, bname,bauthor,bpages} = req.body;// Destructuring
    var book = { isbn: bisbn, name: bname, author:bauthor,pages:parseInt(bpages) };

    if (da.updateBook(book)) {
        res.redirect('/books');
    } else {
        res.render("books/edit", { pageTitle: "Book Edit View", book });
    }
}

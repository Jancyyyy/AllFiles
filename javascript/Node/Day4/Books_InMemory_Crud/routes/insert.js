app.post('/books',function(req,res){
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
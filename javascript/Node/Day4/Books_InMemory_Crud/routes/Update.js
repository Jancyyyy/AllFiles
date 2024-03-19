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
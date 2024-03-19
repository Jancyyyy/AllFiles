app.delete('/books/:isbn',function(req,res){
    Book.findOneAndRemove({isbn:req.params.isbn},
        function(err,result){
            if(err) throw err;
            res.json({
                message:'Successfuly deleted the Book ',book:result
            });
        });
})
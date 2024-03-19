let mongoose = require('mongoose');

//book schema
var bookSchema = mongoose.Schema(
    {
        name:String,
        isbn:{type:String,index:true,unique:true},
        author:String,
        pages:Number
    },
    {
        versionKey:false
    }
);

module.exports = mongoose.model('Book',bookSchema);

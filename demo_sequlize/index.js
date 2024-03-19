const express = require('express');
const http = require('http');

//const { sequelize } = require('./db');
const { Book, sequelize }= require('./model/book');

const app = express();
const server = http.createServer(app);


// Even tho our model is an ES6 compatible class 
// we should not use new to create an instance
// instead we should call the build method
async function addNew(){
	// The following line will sync our models
	// To the database creating them or altering the db
	// To match the new model
    await sequelize.sync({ alter: true });

    // const newBook = Book.build({ 
    //     title: "Rainbow Fish", 
    //     authorName:"Marcus Pfister" });
    // console.log(newBook instanceof Book); // true
    // console.log(newBook.title); // "Jane"

    const newBook = Book.build({ 
        title: "The God Father", 
        authorName:"Mario Puzo" });
    console.log(newBook instanceof Book); // true
    console.log(newBook.title); // "Jane"
    
    const newBook1=Book.build({
        title:"the god father2",
        authorName:"Atle"});
        console.log(newBook1 instanceof Book);
        confirm.log(newBook1.title);
  	// Our newly build instance haven't been saved
	// to the db yet, we need to call .save() 
    await newBook.save();
    //async newBook.save();
    await newBook1.save();
}

async function viewAll(){
    const books = await Book.findAll({
        // The following ensure we get plain data
        // Instead of an array of instances
        raw: true,
    });
    console.log('Books');
    console.log(books);
}


async function deleteBook(){
    const delete_result = await Book.destroy({
      	// to restrict we only delete one
		// We use a where clause with the id
        where: {
            id:'52a1d7c1-7c45-43b2-b9d9-de010f13761a',
        }
    });

    console.log(delete_result);
	// we list all the remaining books in the table
    const books = await Book.findAll({
        raw:true,
    });
    console.log(books);
}


//addNew();
//viewAll();
deleteBook();

server.listen(3000, function () {
    console.log('Server listening on port: 3000!');
});

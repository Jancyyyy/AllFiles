const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
const port = 3000;
 
app.use(bodyParser.json());
 
let students = [
  {id: 101, name: 'Jancy', Section: 'A' },
  {id: 102, name: 'Nancy', Section: 'B' },
  {id: 103, name: "Fancy", Section: "C"},
  {id: 104, name: "Eancy", Section: "D"},
  {id: 105, name: "Cancy", Section: "E"},
  {id: 106, name: "Vancy", Section: "F"},
  ];
 
// CRUD operations
 
// Get all students
app.get('/students', (req, res) => {
  res.json(students);
});
 
// Get a specific student by ID
app.get('/students/:id', (req, res) => {
const studentId = parseInt(req.params.id);
const student = students.find((b) => b.id === studentId);
 
  if (!student) {
    return res.status(404).json({ error: 'student not found' });
  }
 
  res.json(student);
});
 
// Create a new student
app.post('/students', (req, res) => {
  const newstudent = req.body;
newstudent.id = students.length + 1;
  students.push(newstudent);
 
  res.status(201).json(newstudent);
});
 
// Update a student by ID
app.put('/students/:id', (req, res) => {
const studentId = parseInt(req.params.id);
  const updatedstudent = req.body;
 
const index = students.findIndex((b) => b.id === studentId);
 
  if (index === -1) {
    return res.status(404).json({ error: 'student not found' });
  }
 
  students[index] = { ...students[index], ...updatedstudent };
 
  res.json(students[index]);
});
 
// Delete a student by ID
app.delete('/students/:id', (req, res) => {
const studentId = parseInt(req.params.id);
 
students = students.filter((b) => b.id !== studentId);
 
  res.json({ message: 'student deleted successfully' });
});
 
// Start the server
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});


// const express=require("express");
// const bodyParser=require('body-parser');
// const app=express();
// const port=3000;
// app.use(bodyParser.json())
// let books=[
//   {id:101,name:'jancy',section:'A'},
//   {id:102,name:'fancy',section:'B'},
//   {id:103,name:'nancy',section:'C'}
// ];
// //crud operations
// app.get('/books',(req,res)=>{
//   res.json(books);
// });
// //GET
// //request handling function
// app.get('/books/:id',(req,res)=>{
//   //extracting book id
//   //params-route parameters. this converts id to an integer using parseint
//   const booksId=parseInt(req.params.id);
//   //finding the book
//   const book=books.find((b)=>b.id===booksId);
//   if(!book){
//     //checks if book was not found
//     return res.status(404).json({json:'Book Not Found'});
//   }
//   //if book is found, json will responds with the details that book is found
//   res.json(book);
// });
// //post-add
// app.post('books',(req,res)=>{
//   //the data to create a new resource is sent to request body
//   const newBook=req.body;
//   //we need to assign unique id to the new book
//   newBook.id=books.length+1;
//   //the data will be push that means the new book will be added
//   books.push(newBook);
//   //res successfully created
//   res.status(201).json(newBook);
// });
// //put-update the data of existing book
// app.put('books/:id',(req,res)=>{
//   //we need to extract the bookid from route parameters
//   const bookId=parseInt(req.params.id);
//   //extract the data to request body
//   const updatedBook=req.book;
//   //find the index of the book 
//   const index=books.find((b)=>b.id===bookId);
//   //checking whether the book is not found
//   if(index === -1){
//     return res.status(404).json({error:'Book Not Found'});
//   }
//   //update the book dtat with new data
//   //... merge the existing data with updated data
//   books[index]={}
// });





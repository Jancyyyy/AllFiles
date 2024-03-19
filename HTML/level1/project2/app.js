const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
const port = 3000;
 
app.use(bodyParser.json());
 
// In-memory storage for simplicity
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];
 
// CRUD operations
 
// Get all books
app.get('/books', (req, res) => {
  res.json(books);
});
 
// Get a specific book by ID
app.get('/books/:id', (req, res) => {
const bookId = parseInt(req.params.id);
const book = books.find((b) => b.id === bookId);
 
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
 
  res.json(book);
});
 
// Create a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
newBook.id = books.length + 1;
  books.push(newBook);
 
  res.status(201).json(newBook);
});
 
// Update a book by ID
app.put('/books/:id', (req, res) => {
const bookId = parseInt(req.params.id);
  const updatedBook = req.body;
 
const index = books.findIndex((b) => b.id === bookId);
 
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
 
  books[index] = { ...books[index], ...updatedBook };
 
  res.json(books[index]);
});
 
// Delete a book by ID
app.delete('/books/:id', (req, res) => {
const bookId = parseInt(req.params.id);
 
books = books.filter((b) => b.id !== bookId);
 
  res.json({ message: 'Book deleted successfully' });
});
 
// Start the server
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});


fibnocci series reverse 
accordion react
for-in,while-in,for-each
htmla and css
css and sass
versions difference html:https://www.educba.com/versions-of-html/
web-api
redux-toolkit

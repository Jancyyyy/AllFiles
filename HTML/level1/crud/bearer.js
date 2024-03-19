const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
 
const app = express();
const port = 3000;
 
app.use(bodyParser.json());
 
// In-memory storage for simplicity
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];
 
// Generate a random secret key for JWT signing and verification
const secretKey = crypto.randomBytes(32).toString('hex');
 
console.log('secretKey', secretKey);
 
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
 
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
 
  // Extract the token from the "Bearer <token>" format
  const extractedToken = token.split(' ')[1];
 
  jwt.verify(extractedToken, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
 
    req.user = user;
    next();
  });
};
 
// CRUD operations with JWT authentication
 
// Get all books (no authentication required)
app.get('/books', (req, res) => {
  res.json(books);
});
 
// Get a specific book by ID (no authentication required)
app.get('/books/:id', (req, res) => {
const bookId = parseInt(req.params.id);
const book = books.find((b) => b.id === bookId);
 
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
 
  res.json(book);
});
 
// Create a new book (authentication required)
app.post('/books', authenticateJWT, (req, res) => {
  const newBook = req.body;
newBook.id = books.length + 1;
  books.push(newBook);
 
  res.status(201).json(newBook);
});
 
// Update a book by ID (authentication required)
app.put('/books/:id', authenticateJWT, (req, res) => {
const bookId = parseInt(req.params.id);
  const updatedBook = req.body;
 
const index = books.findIndex((b) => b.id === bookId);
 
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
 
  books[index] = { ...books[index], ...updatedBook };
 
  res.json(books[index]);
});
 
// Delete a book by ID (authentication required)
app.delete('/books/:id', authenticateJWT, (req, res) => {
const bookId = parseInt(req.params.id);
 
books = books.filter((b) => b.id !== bookId);
 
  res.json({ message: 'Book deleted successfully' });
});
 
// Start the server
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});
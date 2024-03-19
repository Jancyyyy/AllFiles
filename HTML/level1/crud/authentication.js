// const authenticateJWT = (req, res, next) => {
//     const token = req.header('Authorization');
   
//     if (!token) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }
   
//     jwt.verify(token, secretKey, (err, user) => {
//       if (err) {
//         console.error(err); // Log the error for debugging
//         return res.status(403).json({ error: 'Invalid token' });
//       }
   
//       console.log('Decoded User:', user); // Log decoded user information
//       req.user = user;
//       next();
//     });
//   }; 
  




  const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
 
const app = express();
const port = 3000;
const secretKey = 'rtyhbvcftyujnbvftyhnbvfgtyujnbvgtyuikjnbgyuiknbvfgyuikjnbvfrt678ijhvcfdr5678ijbvfrt678ijhbvfty789okjbgt6789oijhgfr5iure4uyhgfr569ijhgt678ikjnbvgty78ikjnbgt789'; // Replace with a strong, secret key
 
// In-memory storage for simplicity
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

app.use(bodyParser.json());
 
// Middleware to authenticate requests
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
 
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
 
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden' });
    }
 
    req.user = user;
    next();
  });
};
 

 
// CRUD operations
 
// Get all books (protected route)
app.get('/books', (req, res) => {
  res.json(books);
});
 
// Get a specific book by ID (protected route)
app.get('/books/:id', (req, res) => {
const bookId = parseInt(req.params.id);
const book = books.find((b) => b.id === bookId);
 
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
 
  res.json(book);
});
 
// Create a new book (protected route)
app.post('/books', authenticateJWT, (req, res) => {
  const newBook = req.body;
newBook.id = books.length + 1;
  books.push(newBook);
 
  res.status(201).json(newBook);
});
 
// Update a book by ID (protected route)
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
 
// Delete a book by ID (protected route)
app.delete('/books/:id', authenticateJWT, (req, res) => {
const bookId = parseInt(req.params.id);
 
books = books.filter((b) => b.id !== bookId);
 
  res.json({ message: 'Book deleted successfully' });
});
 
// Start the server
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});


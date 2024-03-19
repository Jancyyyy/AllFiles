const express = require('express');
const bodyParser = require('body-parser');
const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const app = express();
const port = 3000;
app.use(bodyParser.json());
// In-memory storage for simplicity
let books = [
 { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
 { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];
// Auth0 JWT middleware setup
const checkJwt = jwt({
 secret: jwksRsa.expressJwtSecret({
   cache: true,
   rateLimit: true,
   jwksRequestsPerMinute: 5,
   jwksUri: `https://YOUR_AUTH0_DOMAIN/.well-known/jwks.json`
 }),
 audience: 'YOUR_API_AUDIENCE',
//  issuer: `https://YOUR_AUTH0_DOMAIN/`,
 issuer:'https://dev-k21sdzoil74qqm5g.us.auth0.com',
 algorithms: ['RS256']
});
// CRUD operations with Auth0 authentication
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
app.post('/books', checkJwt, (req, res) => {
 const newBook = req.body;
newBook.id = books.length + 1;
 books.push(newBook);
 res.status(201).json(newBook);
});
// Update a book by ID (authentication required)
app.put('/books/:id', checkJwt, (req, res) => {
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
app.delete('/books/:id', checkJwt, (req, res) => {
 const bookId = parseInt(req.params.id);
 books = books.filter((b) => b.id !== bookId);
 res.json({ message: 'Book deleted successfully' });
});
// Start the server
app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});
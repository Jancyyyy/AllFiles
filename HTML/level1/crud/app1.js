//import express framework
const express = require('express');
//imports body-parser 
const bodyParser = require('body-parser');
//library to generate jsonwebtoken
const jwt = require('jsonwebtoken');
 
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
 
const secretKey = jwt.sign(
  //the data will be encoded(to change) into the token
  {},
  "Authentication",
);
 console.log("secret key",secretKey);

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
 console.log(token);
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
 
  jwt.verify(token, "Authentication", (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};
 
// CRUD operations with JWT authentication
 
// Get all students (no authentication required)
app.get('/students', (req, res) => {
  res.json(students);
});
 
// Get a specific student by ID (no authentication required)
app.get('/students/:id', (req, res) => {
const studentId = parseInt(req.params.id);
const student = students.find((b) => b.id === studentId);
  if (!student) {
    return res.status(404).json({ error: 'student not found' });
  }
  res.json(student);
});
 
// Create a new student (authentication required)
app.post('/students', authenticateJWT, (req, res) => {
  const newstudent = req.body;
newstudent.id = students.length + 1;
  students.push(newstudent);
 
  res.status(201).json(newstudent);
});
 
// Update a student by ID (authentication required)

app.put('/students/:id', authenticateJWT, (req, res) => {
  console.log('PUT Request Body:', req.body);
const studentId = parseInt(req.params.id);
  const updatedstudent = req.body;
 
const index = students.findIndex((b) => b.id === studentId);
 
  if (index === -1) {
    return res.status(404).json({ error: 'student not found' });
  }
 
  students[index] = { ...students[index], ...updatedstudent };
 
  res.json(students[index]);
});
 
// Delete a student by ID (authentication required)
app.delete('/students/:id', authenticateJWT, (req, res) => {
const studentId = parseInt(req.params.id);
 
students = students.filter((b) => b.id !== studentId);
 
  res.json({ message: 'student deleted successfully' });
});
 
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});
// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
const port = 3001;
const corsOptions = {
    origin: 'http://localhost:3000', // This is our frontend server URL
    credentials: true, // This enables the credentials (cookies, Authorization headers) to be sent with the request
  };
  
  app.use(cors(corsOptions));
  
app.use(cors());// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'inventory',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Middleware
app.use(bodyParser.json());

// API endpoint to handle the request
app.post('/api/make-request', (req, res) => {
  const { firstName, lastName, email, date, phone, quantity, department, description, item } = req.body;
  
  // Insert the data into the database

  const sql = 'INSERT INTO requistions1 (firstName, lastName, email, date, phone, quantity, department, description, item) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [firstName, lastName, email, date, phone, quantity, department, description, item], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Request added to the database');
      res.status(200).json({ success: true });
    }
  });
});
app.get('/api/past-history', (req, res) => {
  const query = 'SELECT * FROM requistions1';
  db.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

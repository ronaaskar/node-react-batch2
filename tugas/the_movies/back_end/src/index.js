// index.js
import express from 'express';
import mysql from 'mysql2';

const app = express();
const port = 5000;

// Koneksi ke MySQL pakai IPv4
const db = mysql.createConnection({
  host: '127.0.0.1',        // pakai IPv4
  user: 'root',             // ganti sesuai password MySQL
  password: 'root',         // ganti sesuai password MySQL
  database: 'db_the_movies',// ganti sesuai nama database
  port: 3306                // port default MySQL SQL
});

// Cek koneksi MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL connected');
});

// Endpoint 1: ambil semua users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Endpoint 2: ambil semua judul
app.get('/api/movie', (req, res) => {
  db.query('SELECT * From movie', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

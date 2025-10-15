// index3.js
var filterBooksPromise = require('./promise2.js');

// 1️⃣ Buku berwarna dan jumlah halamannya 50 (pakai .then/.catch)
filterBooksPromise(true, 50)
  .then(books => {
    console.log("Buku berwarna dan 50 halaman:", books);
  })
  .catch(err => {
    console.log("Error:", err.message);
  });

// 2️⃣ Buku tidak berwarna dan jumlah halamannya 250 (pakai async/await)
async function checkNonColorfulBook() {
  try {
    var books = await filterBooksPromise(false, 250);
    console.log("Buku tidak berwarna dan 250 halaman:", books);
  } catch (err) {
    console.log("Error:", err.message);
  }
}
checkNonColorfulBook();

// 3️⃣ Buku berwarna dan jumlah halamannya 30 (pakai async/await, akan reject)
async function checkSmallColorfulBook() {
  try {
    var books = await filterBooksPromise(true, 30);
    console.log("Buku berwarna dan 30 halaman:", books);
  } catch (err) {
    console.log("Error:", err.message);
  }
}
checkSmallColorfulBook();

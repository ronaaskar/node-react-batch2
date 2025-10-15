// index.js
var readBooks = require('./callback.js');

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
];

var totalTime = 10000; // 10 detik

function startReading(index, timeLeft) {
    if (index < books.length && timeLeft > 0) {
        readBooks(timeLeft, books[index], function(sisaWaktu) {
            // Lanjut ke buku berikutnya setelah callback
            startReading(index + 1, sisaWaktu);
        });
    } else {
        console.log("Selesai membaca buku atau waktu habis");
    }
}

// Mulai membaca dari buku pertama
startReading(0, totalTime);

// index2.js
var readBooksPromise = require('./promise.js');

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
];

var totalTime = 10000; // 10 detik

async function startReading() {
    var timeLeft = totalTime;

    for (var i = 0; i < books.length; i++) {
        try {
            timeLeft = await readBooksPromise(timeLeft, books[i]);
        } catch (err) {
            console.log("Waktu habis, tidak bisa membaca buku:", books[i].name);
            break; // berhenti karena waktu habis
        }
    }

    console.log("Selesai membaca buku atau waktu habis");
}

// Jalankan proses membaca
startReading();


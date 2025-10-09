var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

// Hitung panjang string
var panjangString = sentence.length;

// Variabel untuk kategori
var kategori = "";

// Logika pengkategorian
if (panjangString < 10) {
    kategori = "Pendek";
} else if (panjangString >= 10 && panjangString <= 30) {
    kategori = "Sedang";
} else if (panjangString > 30) {
    kategori = "Panjang";
}

// Tampilkan hasil
console.log("Kalimat: " + sentence);
console.log("Panjang string: " + panjangString);
console.log("Kategori: " + kategori);




// Menentukan nilai
var nilai = 75;

// Pengkondisian indeks nilai
var indeks = "";

if (nilai >= 80) {
    indeks = "A";
} else if (nilai >= 70 && nilai < 80) {
    indeks = "B";
} else if (nilai >= 60 && nilai < 70) {
    indeks = "C";
} else if (nilai >= 50 && nilai < 60) {
    indeks = "D";
} else if (nilai < 50) {
    indeks = "E";
}

// Menampilkan hasil nilai
console.log("Nilai kamu:", nilai);
console.log("Indeks nilai:", indeks);

// Variabel tanggal dan bulan
var tanggal = 15;
var bulan = 6;

// Menampilkan tanggal dan bulan
console.log("Tanggal:", tanggal);
console.log("Bulan:", bulan);




var tanggal = 15;
var bulan = 6;
var tahun = 1981;
var namaBulan = "";

// Gunakan switch-case untuk menentukan nama bulan
switch (bulan) {
    case 1:
        namaBulan = "Januari";
        break;
    case 2:
        namaBulan = "Februari";
        break;
    case 3:
        namaBulan = "Maret";
        break;
    case 4:
        namaBulan = "April";
        break;
    case 5:
        namaBulan = "Mei";
        break;
    case 6:
        namaBulan = "Juni";
        break;
    case 7:
        namaBulan = "Juli";
        break;
    case 8:
        namaBulan = "Agustus";
        break;
    case 9:
        namaBulan = "September";
        break;
    case 10:
        namaBulan = "Oktober";
        break;
    case 11:
        namaBulan = "November";
        break;
    case 12:
        namaBulan = "Desember";
        break;
    default:
        namaBulan = "Bulan tidak valid";
        break;
}

// Tampilkan hasil
console.log(tanggal + " " + namaBulan + " " + tahun);

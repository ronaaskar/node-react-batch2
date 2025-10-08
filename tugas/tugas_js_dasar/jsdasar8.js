var sisi = " 1 2 ";
var jariJari = "7.5";

// 1️⃣ Hapus semua spasi di variabel sisi, lalu ubah ke tipe data Number (integer)
var sisiBersih = sisi.replace(/\s/g, "");  // hapus semua spasi
var sisiInt = Number(sisiBersih);           // ubah ke angka

// Hitung luas persegi (sisi × sisi)
var luasPersegi = sisiInt * sisiInt;

// 2️⃣ Ubah jariJari ke tipe data float
var jariJariFloat = parseFloat(jariJari);

// Hitung luas lingkaran (π × r²)
var luasLingkaran = Math.PI * jariJariFloat * jariJariFloat;

// Tampilkan hasil
console.log("Luas Persegi = " + luasPersegi);
console.log("Luas Lingkaran = " + luasLingkaran);


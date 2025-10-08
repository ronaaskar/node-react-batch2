var nama = "Rona Askar "; // isi dengan nama kalian
var kata1 = "saya ";
var kata2 = "berharap ";
var kata3 = "untuk ";
var kata4 = "menjadi ";
var kata5 = "seorang ";
var kata6 = "software ";
var kata7 = "engineer ";

console.log(kata1 + kata2 + kata3 + kata4 + kata5 + kata6 + kata7);



var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789";

// 1. password1 = "TEST123"
var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3];
console.log("password ke satu : " + password1);

// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10];
console.log("password ke dua : " + password2);



var sentence2 = 'wow JavaScript is so cool';

var exampleFirstWord2 = sentence2.substring(0, 3);       // "wow"
var secondWord2 = sentence2.substring(4, 14);            // "JavaScript"
var thirdWord2 = sentence2.substring(15, 17);            // "is"
var fourthWord2 = sentence2.substring(18, 20);           // "so"
var fifthWord2 = sentence2.substring(21, 25);            // "cool"

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);



var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// 1. password pertama : HELLO
var kode1 = abjad.indexOf("H") + "-" +
             abjad.indexOf("E") + "-" +
             abjad.indexOf("L") + "-" +
             abjad.indexOf("L") + "-" +
             abjad.indexOf("O");
console.log("kode 1: " + kode1);

// 2. password kedua : WORLD
var kode2 = abjad.indexOf("W") + "-" +
             abjad.indexOf("O") + "-" +
             abjad.indexOf("R") + "-" +
             abjad.indexOf("L") + "-" +
             abjad.indexOf("D");
console.log("kode 2: " + kode2);

// 3. password ketiga : IMREADY
var kode3 = abjad.indexOf("I") + "-" +
             abjad.indexOf("M") + "-" +
             abjad.indexOf("R") + "-" +
             abjad.indexOf("E") + "-" +
             abjad.indexOf("A") + "-" +
             abjad.indexOf("D") + "-" +
             abjad.indexOf("Y");
console.log("kode 3: " + kode3);



var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";

// ubah huruf sesuai ketentuan
var pertamaFix = pertama.charAt(0).toUpperCase() + pertama.slice(1); // "Saya"
var keduaFix = kedua.slice(0, 5) + kedua.charAt(5).toUpperCase();     // "SenanG"
var ketigaFix = ketiga.slice(0, 6) + ketiga.charAt(6).toUpperCase();  // "BelajaR"
var keempatFix = keempat.toUpperCase();                               // "JAVASCRIPT"

// gabungkan semua dengan spasi
var hasil = pertamaFix + " " + keduaFix + " " + ketigaFix + " " + keempatFix;

console.log(hasil);



var panjang = "12";
var lebar = "7";
var alas = "6";
var tinggi = "13";

// ubah ke integer (bilangan bulat)
var panjangInt = parseInt(panjang);
var lebarInt = parseInt(lebar);
var alasInt = parseInt(alas);
var tinggiInt = parseInt(tinggi);

// hitung luas persegi panjang (p × l)
var luasPersegiPanjang = panjangInt * lebarInt;

// hitung luas segitiga (½ × alas × tinggi)
var luasSegitiga = 0.5 * alasInt * tinggiInt;

// tampilkan hasil
console.log("Luas Persegi Panjang = " + luasPersegiPanjang);
console.log("Luas Segitiga = " + luasSegitiga);



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

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


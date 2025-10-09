console.log("LOOPING PERTAMA");

var i = 2; // mulai dari 2
while (i <= 20) {
  console.log(i + " - I love coding");
  i += 2; // naik 2 kali setiap langkah
}

console.log("LOOPING KEDUA");

var j = 20; // dimulai dari 20
while (j >= 2) {
  console.log(j + " - I will become a MERN Stack developer");
  j -= 2; // turun 2 kali setiap langkah
}



console.log("LOOPING ANGKA GANJIL GENAP");

for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " - Angka Genap");
  } else {
    console.log(i + " - Angka Ganjil");
  }
}





console.log("LOOPING SYARAT KHUSUS");

for (var i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 2 !== 0) {
    console.log(i + " - I Love Coding");
  } else if (i % 3 === 0 && i % 2 === 0) {
    console.log(i + " - ToT");
  } else if (i % 2 === 0) {
    console.log(i + " - Berkualitas");
  } else {
    console.log(i + " - Santai");
  }
}





console.log("Segitiga # Tinggi 7");

for (var i = 1; i <= 7; i++) {
  var hasil = "";
  for (var j = 1; j <= i; j++) {
    hasil += "#";
  }
  console.log(hasil);
}




var sentence = "Fullstack Developer";
var hasil = "";

for (var i = 0; i < sentence.length; i++) {
  var huruf = sentence[i].toLowerCase();

  // Cek apakah huruf BUKAN vokal (a, e, i, o, u) dan bukan spasi
  if (huruf != "a" && huruf != "e" && huruf != "i" && huruf != "o" && huruf != "u" && huruf != " ") {
    hasil += sentence[i]; // simpan huruf konsonan asli (huruf besar/kecil tetap)
  }
}

console.log("Huruf konsonan dari kalimat tersebut adalah:");
console.log(hasil);

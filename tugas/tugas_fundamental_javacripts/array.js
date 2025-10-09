var dataPeserta = ["john", "laki-laki", "programmer", "30"];

var output = "Nama saya " + dataPeserta[0] + 
             ", saya adalah seorang " + dataPeserta[2] + 
             ", berjenis kelamin " + dataPeserta[1] + 
             ", dan berumur " + dataPeserta[3] + " tahun.";

console.log(output);




var sayuran = [];

// menambahkan data ke array menggunakan method push()
sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

// tampilkan hasilnya
console.log(sayuran);

sayuran.sort();

console.log("Daftar Sayuran (urut alfabet):");
for (var i = 0; i < sayuran.length; i++) {
  console.log((i + 1) + ". " + sayuran[i]);
}



var word = "car";
var result = [];

for (var i = 0; i < word.length; i++) {
  for (var j = i + 1; j <= word.length; j++) {
    result.push(word.substring(i, j));
  }
}

console.log(result);



//cara looping for
var numbers = [4, 5, 1, 4, 6, 8, 9, 21];
var total = 0;

for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log("Jumlah total:", total);

//atau cara methode (reducing/pengurangan)
var numbers = [4, 5, 1, 4, 6, 8, 9, 21];

var total = numbers.reduce(function(acc, current) {
  return acc + current;
}, 0);

console.log("Jumlah total:", total);




var kumpulanAngka = [
  [1, 3, 5, 7, 8, 9],
  [4, 5, 6, 2, 3, 1],
  [6, 7, 8, 1, 3, 5],
];

var hasil = []; // tempat menyimpan hasil penjumlahan tiap baris

for (var i = 0; i < kumpulanAngka.length; i++) {
  var total = 0;
  for (var j = 0; j < kumpulanAngka[i].length; j++) {
    total += kumpulanAngka[i][j];
  }
  hasil.push(total);
}

console.log(hasil);




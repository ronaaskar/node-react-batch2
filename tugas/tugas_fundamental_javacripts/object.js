
// 1️. Menyeleksi  Buah tanpa biji

var buah = [
  { nama: "Nanas", warna: "Kuning", adaBiji: "tidak", harga: 9000 },
  { nama: "Jeruk", warna: "Oranye", adaBiji: "ada", harga: 8000 },
  { nama: "Semangka", warna: "Hijau & Merah", adaBiji: "ada", harga: 10000 },
  { nama: "Pisang", warna: "Kuning", adaBiji: "tidak", harga: 5000 }
];

var buahTanpaBiji = buah.filter(function(item) {
  return item.adaBiji === "tidak";
});

console.log("Buah yang tidak memiliki biji:");
console.log(buahTanpaBiji);




// 2️. Menambah data film 

var dataFilm = [];

function tambahDataFilm(nama, durasi, genre, tahun) {
  var film = {
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun
  };
  dataFilm.push(film);
}

tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("Avenger", "2 jam", "action", "2019");
tambahDataFilm("Spiderman", "2 jam", "action", "2004");
tambahDataFilm("Juon", "2 jam", "horror", "2004");

console.log("Daftar Film:");
console.log(dataFilm);




// 3️. Menyaring usia laki-laki diatas 29 tahun

var people = [
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
];

var lakiLakiDiAtas29 = people.filter(function(person) {
  return person.gender === "male" && person.age > 29;
});

console.log("Laki-laki di atas usia 29:");
console.log(lakiLakiDiAtas29);




// 4️. Menghitung rata-rata usia

var totalUsia = people.reduce(function(acc, person) {
  return acc + person.age;
}, 0);

var rataRataUsia = totalUsia / people.length;

console.log("Rata-rata usia:", rataRataUsia);




// 5️. Urutkan data berdasarkan usia

people.sort(function(a, b) {
  return a.age - b.age;
});

console.log("Urutan nama berdasarkan usia:");
for (var i = 0; i < people.length; i++) {
  console.log((i + 1) + ". " + people[i].name);
}




// 6. Tambah warna ke object

var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
};

function addColors(warnaBaru) {
  phone.colors.push(warnaBaru);
}

addColors("Gold");
addColors("Silver");
addColors("Brown");

console.log("Data Phone:");
console.log(phone);

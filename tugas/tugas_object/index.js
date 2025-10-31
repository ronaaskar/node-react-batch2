//No.1
const fruits = [
  { nama: "Nanas", warna: "Kuning", adaBiji: false, harga: 9000 },
  { nama: "Jeruk", warna: "Oranye", adaBiji: true, harga: 8000 },
  { nama: "Semangka", warna: "Hijau & Merah", adaBiji: true, harga: 10000 },
  { nama: "Pisang", warna: "Kuning", adaBiji: false, harga: 5000 }
];

// Filter buah yang tidak memiliki biji
const seedlessFruits = fruits.filter(fruit => fruit.adaBiji === false);

// Tampilkan hasil
console.log("Buah yang tidak memiliki biji:");
console.log(seedlessFruits);


//No.2

// Function untuk menambahkan object film ke array
function tambahDataFilm(nama, durasi, genre, tahun) {
    // Buat object film baru
    var film = {
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    };
    // Masukkan object ke array dataFilm
    dataFilm.push(film);
}

// Array untuk menyimpan data film
var dataFilm = [];

// Menambahkan data film
tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");

// Tampilkan hasil array dataFilm
console.log(dataFilm);




//no.3
var people = [
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
];

// Filter data laki-laki dengan umur di atas 29
var hasil = people.filter(function(person) {
  return person.gender === "male" && person.age > 29;
});

console.log("Data laki-laki dengan umur di atas 29:");
console.log(hasil);



//no.4

var people = [
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
];

// Hitung total usia
var totalUsia = people.reduce(function(total, person) {
  return total + person.age;
}, 0);

// Hitung rata-rata
var rataRataUsia = totalUsia / people.length;

console.log("Rata-rata usia:", rataRataUsia);



//no.5

var people = [
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
];

// Urutkan berdasarkan umur dari yang terkecil ke terbesar
people.sort((a, b) => a.age - b.age);

// Tampilkan hanya nama beserta nomor urut
people.forEach((person, index) => {
  console.log(`${index + 1}. ${person.name}`);
});


//no.6

var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
}

// Function untuk menambahkan warna baru ke property colors
function addColors(newColor) {
  phone.colors.push(newColor);
}

// Menambahkan warna baru
addColors("Gold");
addColors("Silver");
addColors("Brown");

// Tampilkan hasilnya
console.log(phone);

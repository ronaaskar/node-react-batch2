var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
}

function addColors(...newColors) {
  if (!Array.isArray(phone.colors)) {
    phone.colors = [];
  }

  newColors.forEach(color => {
    if (typeof color === 'string') {
      const trimmed = color.trim();
      if (trimmed) {
        phone.colors.push(trimmed);
      }
    }
  });
}

addColors("Gold")
addColors("Silver")
addColors("Brown")
console.log(phone)



//N0.2

// ==============================
// Fungsi utama perhitungan bangun ruang
// ==============================
function hitungBangunRuang(volumeFn, luasFn, ...args) {
  const volume = volumeFn(...args);
  const luas = luasFn(...args);
  
  return {
    volume,
    luasPermukaan: luas
  };
}

// ==============================
// Rumus Kubus
// Volume = sisi³
// Luas permukaan = 6 × sisi²
// ==============================
function volumeKubus(sisi) {
  return sisi * sisi * sisi;
}

function luasKubus(sisi) {
  return 6 * (sisi * sisi);
}

// ==============================
// Rumus Balok
// Volume = p × l × t
// Luas permukaan = 2 × (p×l + p×t + l×t)
// ==============================
function volumeBalok(p, l, t) {
  return p * l * t;
}

function luasBalok(p, l, t) {
  return 2 * (p*l + p*t + l*t);
}

// ==============================
// Fungsi pembungkus (menggunakan first-class function)
// ==============================
function hitungKubus(sisi) {
  return hitungBangunRuang(volumeKubus, luasKubus, sisi);
}

function hitungBalok(p, l, t) {
  return hitungBangunRuang(volumeBalok, luasBalok, p, l, t);
}

// ==============================
// Contoh pemakaian
// ==============================
console.log("Hasil perhitungan Kubus (sisi = 8):");
console.log(hitungKubus(8));

console.log("\nHasil perhitungan Balok (p=12, l=7, t=5):");
console.log(hitungBalok(12, 7, 5));



//no.3

var people = [
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
];

// ============================
// 1️⃣ Urutkan berdasarkan umur (ascending)
// ============================
people.sort((a, b) => a.age - b.age);

// ============================
// 2️⃣ Fungsi rekursif untuk menampilkan nama
// ============================
function tampilkanNama(data, index = 0) {
  // kondisi berhenti
  if (index >= data.length) return;
  
  // tampilkan data ke terminal
  console.log(`${index + 1}. ${data[index].name}`);
  
  // panggil dirinya sendiri dengan index berikutnya
  tampilkanNama(data, index + 1);
}

// ============================
// 3️⃣ Jalankan
// ============================
tampilkanNama(people);



//no.4

var phones = [
  {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
  {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
  {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
  {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
  {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
];

// ============================
// 1️⃣ Filter: hanya ambil yang punya warna 'black'
// ============================
var filteredPhones = phones.filter(phone => phone.colors.includes("black"));

// ============================
// 2️⃣ Urutkan berdasarkan tahun (dari kecil ke besar)
// ============================
filteredPhones.sort((a, b) => a.year - b.year);

// ============================
// 3️⃣ Tampilkan data pakai Recursive Function
// ============================
function tampilkanPhones(data, index = 0) {
  // kondisi berhenti
  if (index >= data.length) return;

  // ambil data saat ini
  const phone = data[index];
  const colors = phone.colors.join(", ");

  // tampilkan
  console.log(`${index + 1}. ${phone.name}, colors available : ${colors}`);

  // panggil fungsi lagi untuk item berikutnya
  tampilkanPhones(data, index + 1);
}

// ============================
// 4️⃣ Jalankan
// ============================
tampilkanPhones(filteredPhones);

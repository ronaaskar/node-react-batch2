//1A
const luasLingkaran = (r) => 3.14 * r * r;
const kelilingLingkaran = (r) => 2 * 3.14 * r;

const r = 7; // angka 7 merupakan contoh nilai jari-jari dan nilai ini bisa digantikan angka lainnya.
console.log("Jari-jari =", r);
console.log("Luas:", luasLingkaran(r));
console.log("Keliling:", kelilingLingkaran(r));



//IB
const introduceSimple = (...data) => {
  const [name, age, gender, job] = data;
  return `Pak ${name} adalah seorang ${job} yang berusia ${age} tahun`;
};

const perkenalanJohn = introduceSimple("John", "30", "Laki-Laki", "penulis");
console.log(perkenalanJohn);



//2A
const introduceGender = (...data) => {
  const [name, age, gender, job] = data;

  if (gender === "Laki-Laki") {
    return `Pak ${name} adalah seorang ${job} yang berusia ${age} tahun`;
  } else {
    return `Bu ${name} adalah seorang ${job} yang berusia ${age} tahun`;
  }
};

const perkenalanJohn2 = introduceGender("john", "30", "Laki-Laki", "penulis");
console.log(perkenalanJohn2);


const perkenalanSarah = introduceGender("sarah", "28", "Perempuan", "guru");
console.log(perkenalanSarah);



//2B

const newFunction = (firstName, lastName) => ({
  firstName,
  lastName,
  fullName() {
    console.log(`${firstName} ${lastName}`);
  }
});



//3

const newFunctionES6 = (firstName, lastName) => ({
  firstName,
  lastName,
  fullName() {
    console.log(`${firstName} ${lastName}`);
  }
});

// Jangan mengubah atau menghapus koding di bawah ini
console.log(newFunctionES6("John", "Doe").firstName);
console.log(newFunctionES6("Richard", "Roe").lastName);
newFunctionES6("William", "Imoh").fullName();


//4
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
};

const { brand: phoneBrand, name: phoneName, year, colors } = phone;

const [colorBronze, , colorBlack] = colors; 

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze);



//5

let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"]
};


let warnaGabungan = [...buku.warnaSampul, ...warna];


buku = {
  ...buku,
  ...dataBukuTambahan,
  warnaSampul: warnaGabungan
};

console.log(buku);



//6

function addProducts(samsung, newProducts) {
  
samsung.products = [...samsung.products, ...newProducts];

return samsung;
}

let samsung = {
  name: "Samsung",
  products: [
  { name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"] },
  { name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"] },
  { name: "Samsung Galaxy Note 20s", colors: ["white", "black"] }
  ]
};

let newProducts = [
  { name: "Samsung Galaxy A52", colors: ["white", "black"] },
  { name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"] }
];


samsung = addProducts(samsung, newProducts);

console.dir(samsung, { depth: null });



//7

const konversiObject = ([nama, domisili, umur]) => ({ nama, domisili, umur });


let data = ["Bondra", "Medan", 25];
console.log(konversiObject(data));



//8


const graduate = (...dataSets) => {
  
const allData = [].concat(...dataSets);


const result = {};


allData.forEach(({ name, class: kelas }) => {

if (!result[kelas]) result[kelas] = [];

result[kelas].push(name);
});

return result;
};


const data1 = [
  { name: "Ahmad", class: "adonis" },
  { name: "Regi", class: "laravel" },
  { name: "Bondra", class: "adonis" },
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
];

const data2 = [
  { name: "Yogi", class: "react" },
  { name: "Fikri", class: "agile" },
  { name: "Arief", class: "agile" }
];

console.log(graduate(data1));

console.log(graduate(data2));


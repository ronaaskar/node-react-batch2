//nomor 1

function BangunDatar(hitungLuas, hitungKeliling) {
  console.log("Luas:", hitungLuas());
  console.log("Keliling:", hitungKeliling());
}

function hitungPersegi(sisi) {
  const luas = () => sisi * sisi;          // fungsi luas
  const keliling = () => 4 * sisi;         // fungsi keliling

  console.log("=== Persegi ===");
  BangunDatar(luas, keliling);       

function hitungPersegiPanjang(panjang, lebar) {
  const luas = () => panjang * lebar;
  const keliling = () => 2 * (panjang + lebar);

  console.log("=== Persegi Panjang ===");
  BangunDatar(luas, keliling);
}

hitungPersegi(8);
hitungPersegiPanjang(12, 7);



//nomor 2

function bangunruang(volume, luaspermukaan) {
  console.log("volume:", volume());
  console.log("luaspermukaan:", luaspermukaan());
}

function hitungkubus (sisi) {
  const volume = () => sisi * sisi* sisi;          // volume kubus
  const luaspermukaan = () => 6 * sisi * sisi;     // luas permukaan kubus

  console.log("=== kubus ===");
  bangunruang(volume, luaspermukaan);
}

function hitungbalok(panjang, lebar, tinggi) {
  const volume = () => panjang * lebar * tinggi;                                                        //volume balok
  const luaspermukaan = () => 2 * (panjang * lebar) + 2 * (panjang * tinggi) + 2 * (lebar * tinggi );   //luas permukaan balok

  console.log("=== balok ===");
  bangunruang(volume, luaspermukaan);
}

hitungkubus(8);
hitungbalok(12, 7, 5);


//nomor 3
var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

people.sort(function(a, b) { 
    return a.age-b.age;
});

function Nama(data, index = 0) {
  
  if (index >= data.length) return;

  console.log((index + 1) + ". " + data[index].name);

    Nama(data, index + 1);
}

Nama(people) ;


//nomor 4

var phones = [
  {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
  {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
  {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
  {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
  {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
];

var filteredPhones = phones.filter(function(phone) {
  return phone.colors.includes("black");
});

filteredPhones.sort(function(a, b) {
  return a.year - b.year;
});

function Data(data, index = 0) {
  if (index >= data.length) return; 

  var phone = data[index];
  console.log(
    (index + 1) + ". " + phone.name + ", colors available : " + phone.colors.join(", ")
  );

  Data(data, index + 1); 
}

Data(filteredPhones);

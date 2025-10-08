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

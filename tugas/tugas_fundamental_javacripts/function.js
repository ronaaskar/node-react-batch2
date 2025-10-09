//1. Introducing

function introduce(nama, jenisKelamin, pekerjaan, umur) {
  var panggilan;

  if (jenisKelamin == "laki-laki") {
    panggilan = "Pak";
  } else if (jenisKelamin == "perempuan") {
    panggilan = "Bu";
  } else {
    panggilan = "";
  }

  var kalimat = panggilan + " " + nama + " adalah seorang " + pekerjaan + " yang berusia " + umur + " tahun";
  return kalimat;
}

var john = introduce("John", "laki-laki", "penulis", "30");
console.log(john); 

var sarah = introduce("Sarah", "perempuan", "model", "28");
console.log(sarah); 



//2.Karakter unik

function cariKarakterUnik(text) {
  text = text.toLowerCase().replace(/ /g, ""); 
  var hasil = "";

  for (var i = 0; i < text.length; i++) {
    var huruf = text[i];
    
    if (text.indexOf(huruf) === text.lastIndexOf(huruf)) {
      hasil += huruf;
    }
  }

  return hasil;
}

var text = "Super Bootcamp Fullstack Dev 2022";
console.log(cariKarakterUnik(text));


//3. Mencari angka terbesar dan terkecil. 

function cariTerbesarTerkecil(angka) {
  var terbesar = angka[0];
  var terkecil = angka[0];

  for (var i = 1; i < angka.length; i++) {
    if (angka[i] > terbesar) {
      terbesar = angka[i];
    }
    if (angka[i] < terkecil) {
      terkecil = angka[i];
    }
  }

  console.log("Angka terbesar adalah " + terbesar + " dan angka terkecil adalah " + terkecil);
}

var angka = [2, 3, 1, 9, 12, 8, 9, 7];
cariTerbesarTerkecil(angka);




//4. Mengurai kata dan menyusun huruf-hurufnya
function arrangeString(str) {
  // Mengubah string menjadi array, kemudian diurutkan, dan lalu gabungkan kembali
  return str.split('').sort().join('');
}

// TEST CASES
console.log(arrangeString("bahasa"));      // Output: aaabhs
console.log(arrangeString("similikiti"));  // Output: iiiiiklmst
console.log(arrangeString("sanbercode"));  // Output: abcdeenors
console.log(arrangeString(""));            // Output: ""




//5. Nilai angka atau huruf awal dan akhir sama

function palindrome(kata) {
 
  var kataBersih = kata.replace(/\s+/g, '').toLowerCase();

 
  var kataBalik = kataBersih.split('').reverse().join('');

  
  return kataBersih === kataBalik;
}


console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('nababan')); // true
console.log(palindrome('haji ijah')); // true
console.log(palindrome('mister')); // false




function angkaPalindrome(num) {
  
  num++;
  while (true) {
    var strNum = String(num);
    var balik = strNum.split('').reverse().join('');
    if (strNum === balik) {
      return num;
    }
    num++;
  }
}


console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001



//6. Permutasi 
function cekPermutasi(str1, str2) {
  // hilangkan spasi dan ubah ke huruf kecil agar konsisten
  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g, '').toLowerCase();

  // jika panjang tidak sama, langsung bukan permutasi
  if (str1.length !== str2.length) {
    return false;
  }

  // ubah string menjadi array huruf, urutkan, lalu gabungkan lagi
  let sorted1 = str1.split('').sort().join('');
  let sorted2 = str2.split('').sort().join('');

  // bandingkan hasilnya
  return sorted1 === sorted2;
}

// TEST CASES
console.log(cekPermutasi("abah", "baha")); // true
console.log(cekPermutasi("katak", "takak")); // true
console.log(cekPermutasi("katak", "kataa")); // false
console.log(cekPermutasi("Makan", "kanam")); // true
console.log(cekPermutasi("Halo", "olah"));   // false




function cekPermutasi(str1, str2) {
  // hilangkan spasi dan ubah ke huruf kecil
  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g, '').toLowerCase();

  // jika panjang berbeda, langsung false
  if (str1.length !== str2.length) {
    return false;
  }

  // urutkan huruf
  let sorted1 = str1.split('').sort().join('');
  let sorted2 = str2.split('').sort().join('');

  // bandingkan hasil urutan
  return sorted1 === sorted2;
}

// TEST CASES
console.log(cekPermutasi("abah", "baha")); // true
console.log(cekPermutasi("ondel", "delon")); // true
console.log(cekPermutasi("paul sernine", "arsene lupin")); // true
console.log(cekPermutasi("taco", "taca")); // false

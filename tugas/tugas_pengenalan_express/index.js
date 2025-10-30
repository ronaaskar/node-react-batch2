//Nomor 1

// import express
const express = require("express");
const app = express();

// route GET dengan parameter URL
// contoh: http://localhost:3000/lingkaran-tabung/7/10
app.get("/lingkaran-tabung/:jariJari/:tinggi", (req, res) => {
  // ambil nilai parameter dari URL
  const jariJari = Number(req.params.jariJari);
  const tinggi = Number(req.params.tinggi);

  // hitung luas alas (πr²)
  const luasAlas = Math.PI * Math.pow(jariJari, 2);

  // hitung keliling alas (2πr)
  const kelilingAlas = 2 * Math.PI * jariJari;

  // hitung volume tabung (πr²t)
  const volume = Math.PI * Math.pow(jariJari, 2) * tinggi;

  // tampilkan hasil
  res.send(
    `jariJari: ${jariJari}, tinggi: ${tinggi}, volume tabung: ${volume.toFixed(
      2
    )}, luas alas tabung: ${luasAlas.toFixed(2)}, keliling alas tabung: ${kelilingAlas.toFixed(2)}`
  );
});

// jalankan server di port 3000
app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});

//



//Nomor 2

app.get("/data-orang", (req, res) => {
  // Data orang
  let dataOrang = [
    { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
    { id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L" },
    { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
    { id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L" },
    { id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P" },
  ];

  // Ambil parameter dari URL (query parameter)
  const umur = req.query.umur ? Number(req.query.umur) : null;
  const gender = req.query.gender;

  // Filter data sesuai parameter
  let hasil = dataOrang;

  if (umur) {
    hasil = hasil.filter((orang) => orang.umur >= umur);
  }

  if (gender) {
    hasil = hasil.filter((orang) => orang.jenisKelamin === gender);
  }

  // Jika tidak ada data yang cocok
  if (hasil.length === 0) {
    return res.send("Tidak ada data yang sesuai dengan parameter yang diberikan.");
  }

  // Format hasil dalam bentuk teks seperti contoh
  let textHasil = hasil
    .map(
      (orang, index) =>
        `${index + 1}. ${orang.name} - Pekerjaan: ${orang.pekerjaan} - Umur: ${orang.umur} Tahun`
    )
    .join("<br>");

  res.send(textHasil);
});

// Jalankan server
app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});


//http://localhost:3000/data-orang?umur=30&gender=L






// No. 3

app.get("/data-orang/:id", (req, res) => {
  // Data orang
  let dataOrang = [
    { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
    { id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L" },
    { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
    { id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L" },
    { id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P" },
  ];

  // Ambil parameter id dari URL
  const id = Number(req.params.id);

  // Cari data berdasarkan id
  const orang = dataOrang.find((item) => item.id === id);

  // Jika data tidak ditemukan
  if (!orang) {
    return res.send("Maaf data tidak ditemukan");
  }

  // Tentukan sapaan berdasarkan jenis kelamin
  const sapaan = orang.jenisKelamin === "L" ? "Pak" : "Bu";

  // Tampilkan hasil
  res.send(
    `${sapaan} ${orang.name} adalah seorang ${orang.pekerjaan} yang berusia ${orang.umur} tahun`
  );
});

// Jalankan server
app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});


//http://localhost:3000/data-orang

const express = require("express");
const {createMahasiswa, readMahasiswaId} = require ("../controller/mahasiswacontroller");

const router = express.Router()
router.post('/mahasiswa', createMahasiswa)
router.get('/mahasiswa/:id', readMahasiswaId)
module.exports = router;

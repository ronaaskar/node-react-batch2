const express = require("express");
const {createMahasiswa, getAllMahasiswa, getMahasiswaById, updateMahasiswa, deleteMahasiswa } = require ("../controller/mahasiswacontroller");


const router = express.Router()
router.post('/mahasiswa', createMahasiswa)
router.get('/mahasiswa', getAllMahasiswa)
router.get('/mahasiswa/:id', getMahasiswaById)
router.put('/mahasiswa/:id', updateMahasiswa)
router.delete('/mahasiswa/:id', deleteMahasiswa)
module.exports = router;


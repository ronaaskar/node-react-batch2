import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const port = 5000; // atau port lain yang kamu mau



app.use(cors()); // biar front-end bisa akses
app.use(express.json());


/*======================
  GET semua data
======================*/
app.get('/api/stok_barang', async (req, res) => {
  try {
    const data = await prisma.stok_barang.findMany();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*======================
  GET per ID
======================*/
app.get('/api/stok_barang/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await prisma.stok_barang.findUnique({
      where: { id: parseInt(id) }
    });

    if (!data) return res.status(404).json({ error: 'Data tidak ditemukan' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*======================
  SEARCH (query parameters)
======================*/
app.get('/api/stok_barang/search', async (req, res) => {
  try {
    const { produk, kategori, harga, sisa } = req.query;
    const filter = {};

    if (produk) filter.nama = { contains: produk, mode: 'insensitive' };
    if (kategori) filter.kategori = { contains: kategori, mode: 'insensitive' };
    if (harga) filter.harga = parseInt(harga);
    if (sisa) filter.stock = parseInt(sisa);

    const result = await prisma.stok_barang.findMany({
      where: filter
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*======================
  POST / tambah data baru
======================*/
app.post('/api/stok_barang', async (req, res) => {
  try {
    const { produk, kategori, harga, sisa } = req.body;

    const newData = await prisma.stok_barang.create({
      data: {
        produk,
        kategori,
        harga,
        sisa
      }
    });

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*======================
  PUT / update data
======================*/
app.put('/api/stok_barang/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { produk, kategori, harga, sisa } = req.body;

    const updated = await prisma.stok_barang.update({
      where: { id: parseInt(id) },
      data: {
        produk,
        kategori,
        harga,
        sisa
      }
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*======================
  DELETE / hapus data
======================*/
app.delete('/api/stok_barang/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.stok_barang.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Data berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});




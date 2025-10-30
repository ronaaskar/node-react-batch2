import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

// ✅ Aktifkan CORS
app.use(cors());

// Jika mau lebih spesifik (misalnya hanya untuk front-end tertentu)
app.use(cors({
  origin: 'http://localhost:5173', // ganti sesuai URL front-end kamu
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

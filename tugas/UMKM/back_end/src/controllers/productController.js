import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET all products
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET product by ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
      include: { category: true }
    });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE new product
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, imageUrl, categoryId } = req.body;
    const newProduct = await prisma.product.create({
      data: { name, price, description, imageUrl, categoryId: parseInt(categoryId) }
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, imageUrl, categoryId } = req.body;
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { name, price, description, imageUrl, categoryId: parseInt(categoryId) }
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

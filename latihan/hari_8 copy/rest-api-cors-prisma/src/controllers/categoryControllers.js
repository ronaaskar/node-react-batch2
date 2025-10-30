const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

const createCategory = async (req, res) => {
  let { name } = req.body;
  try {
    const category = await prisma.category.create({
      data: {
        name,
      },
    });

    res.json({
      info: category,
      message: "Categpry's Name was succesfully Created",
      status: "Success",
    });
    return;
  } catch (err) {
    res.json({
      info: null,
      message: "Category's Name was unsuccesfully Created",
      status: "Unsuccess",
    });
  }
};

const readCategory = async (req, res) => {
  try {
    const category = await prisma.category.findMany();
    res.json({
      info: category,
      message: "Category's Name was succesfully Fetch",
      status: "Success",
    });
    return;
  } catch (err) {
    res.status(404).json({
      data: null,
      message: "Category was Unsuccesfully Fetch",
      status: "Error",
    });
  }
};

const readCategoryById = async (req, res) => {
  let { id } = req.params;
  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (category) {
      message = "Category Was Succesfully Fetch";
      stat = "Success";
      status = 200;
    } else {
      message = "Category Was not Found";
      stat = "Not Found";
      status = 404;
    }

    res.status(status).json({
      info: movies,
      message,
      status: stat,
    });
    return;
  } catch (err) {
    res.json({
      info: movies,
      message: err.message,
      status: "error",
    });
  }
};

const updateCategory = async (req, res) => {
  let { name } = req.body;
  let { id } = req.params;

  try {
    const category = await prisma.category.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
      },
    });

    res.json({
      info: category,
      message: "Category was Successfuly Updated",
      status: "success",
    });
    return;
  } catch (err) {
    res.json({
      info: null,
      message: "Category's Name was Notfound",
      status: "not found",
    });
  }
};

const deleteCategory = async (req, res) => {
  let { id } = req.params;
  try {
    const category = await prisma.category.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      info: null,
      message: "category was successfully Deleted",
      status: "success",
    });
  } catch (err) {
    res.json({
      info: null,
      message: err.message,
      status: "error",
    });
  }
};

module.exports = {
  createCategory,
  readCategory,
  readCategoryById,
  updateCategory,
  deleteCategory,
};

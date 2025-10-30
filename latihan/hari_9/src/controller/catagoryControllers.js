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


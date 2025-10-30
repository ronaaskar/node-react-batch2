const express = require("express");

const { basicAuth } = require("../middleware/basicAuth");
const { validationBodyMovies } = require("../middleware/validation");
const {
  createCategory,
  readCategory,
  readCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryControllers");
const {
  createMovie,
  readMovie,
  readMovieById,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieControllers");

const router = express.Router();
exports.router = router;

router.post("/movie", createMovie);
router.get("/movie", readMovie);
router.get("/movie/:id", readMovieById);
router.put("/movie/:id", updateMovie);
router.delete("/movie/:id", deleteMovie);

router.post("/category", createCategory);
router.get("/category", readCategory);
router.get("/category/:id", readCategoryById);
router.put("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);


module.exports = {router}
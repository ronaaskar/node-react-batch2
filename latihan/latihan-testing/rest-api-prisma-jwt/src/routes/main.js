const express = require('express')
const { createMovie, readMovie, readMovieById, updateMovie, deleteMovie} = require('../controllers/movieController')
const { basicAuth } = require('../middleware/basicAuth')
const { validationBodyMovies } = require('../middleware/validation')
const { createCategory, readCategory, readCategoryById, updateCategory, deleteCategory } = require('../controllers/categoryController')
const { authJWT } = require('../middleware/auth')
const { register, login } = require('../controllers/userController')

const router = express.Router()

// MOVIE
router.post('/movie', createMovie)
router.get('/movie', readMovie)
router.get('/movie/:id', readMovieById)
router.put('/movie/:id', updateMovie)
router.delete('/movie/:id', deleteMovie)

// CATEGORY
router.post('/category', createCategory)
router.get('/category', readCategory)
router.get('/category/:id', readCategoryById)
router.put('/category/:id', updateCategory)
router.delete('/category/:id', deleteCategory)

// LOGIN
router.post('/register', register)
router.post('/login', login)




module.exports = router
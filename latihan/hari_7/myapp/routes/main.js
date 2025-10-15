const express = require('express')
const { createMovie } = require('../controller/moviecontroller')
const { readMovie } = require('../controller/moviecontroller')
const { readMovieById } = require('../controller/moviecontroller')
const { updateMovieById} = require('../controller/moviecontroller')
const { deleteMovieById} = require('../controller/moviecontroller')


const router = express.Router()


router.post('/movie', createMovie)
router.get('/movie', readMovie)
router.get('/movie/:id', readMovieById)
router.put('/movie/:id', updateMovieById)
router.del('/movie/:id', deleteMovieById)

module.exports = router

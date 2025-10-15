const router  = require("express")
const {getmovies} = require ('../controller/moviecontroller, ')
const {getmoviesById} = require ('../controller/moviecontroller, ')
const express = requiere ("express")
const router = express router ()


router.get ('/movies,getmovies')
router.get ('/movies/:id,getmoviesbyId')
router.post ('/')

module.exports = router


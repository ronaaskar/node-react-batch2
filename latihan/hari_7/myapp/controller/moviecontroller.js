// let movies = [
//     {id: 1, title: "Spider-Man", year: 2002},
//     {id: 2, title: "John Wick", year: 2014},
//     {id: 3, title: "The Avengers", year: 2012},
//     {id: 4, title: "Logan", year: 2017},
// ]



// const getMovies = (req, res) => {
//     let {title} = req.query
//     let {id} = req.query
//     let result = ""
//     console.log(title)
//     console.log(id)

//     if(title === undefined){
//       title = ""
//     }
    
//     movies.forEach((item, index) => {
//       if(item.title.toLowerCase().includes(title)){
//         result += `${index+1}. ${item.title} <br>`
//         }
//         // console.log(title)
//     })
    
//     res.send(result)
// }

// const getMoviesByID = (req, res) => {
//     let {id} = req.params

//     let result = movies.find(movies => movies.id === Number(id))
//     res.send (`${result.title}`)
// } 

const { connectionPool } = require('../config/db')

const createMovie = (req, res) => {
    let {title, year} = req.body

    let queryText = `INSERT INTO movies (title, year, create_at, update_at) VALUES("${title}", ${year}, now(), now())`

    connectionPool.query(queryText, (err, data) => {
        if(err){
            console.log(err)
            return
        }
    })

    res.json({'message': 'Movie Was Succesfully Created', 'status': 'success'})
}

const readMovie = (req, res) => {
    
    let queryText = `SELECT* from movies`

    connectionPool.query(queryText, (err, data) => {
        if(err){
            console.error(err)
            return
        }
    
        res.json (data)
    });
}

const readMovieById = (req, res) => {
    let{id} = req.params
    
    let queryText = `SELECT* FROM movies where id=${id}`


    connectionPool.query(queryText, (err, data) => {
        if(err){
            console.error(err)
            return
        }
    
        res.json (data);
    });
}
module.exports = {createMovie, readMovie, readMovieById}




const updateMovie = (req, res) => {
    let {title,year} = req.body
    let {id} = req.params

    let queryText = `UPDATE MOVIES SET title${title}, year${year}`


    connectionPool.query(queryText, (err, data) => {
        if(err){
            console.error(err)
            return
        }
    
        res.json (data);
    });
}

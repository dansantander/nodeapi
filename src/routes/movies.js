const { Router } = require('express');
const router = Router();
const movies = require('../sample.json');
const _ = require('underscore'); // biblioteca de funcionalidades adicionales para trabajar con datos de forma más simple

// get
router.get('/', (req, res) => {
  res.json(movies);
})

// post
router.post('/', (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const id = movies.length + 1;
    const newMovie = {...req.body, id};
    movies.push(newMovie);
    res.json(movies);
  } else {
    res.status(500).json({error: 'wrong request'})
  }
})

// delete
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  _.each(movies, (movie, i) => {
    if (movie.id == id) {
      movies.splice(i, 1);
    }
  });
  res.json(movies)
})

module.exports = router;
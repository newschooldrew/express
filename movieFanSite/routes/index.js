var express = require('express');
var router = express.Router();
const requestMod = require('request');

// const apiKey = '1fb720b97cc13e580c2c35e1138f90f8'
const apiKey = '1234567';
// const apiBaseUrl = 'https://api.themoviedb.org/3'
const apiBaseUrl = 'http://localhost:3030';
const nowPlayingUrl = `${apiBaseUrl}/most_popular?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

router.use((req,res,next)=>{
    res.locals.imageBaseUrl = imageBaseUrl;
    next();
})

/* GET home page. */
router.get('/', function(request, response, next) {
  // request.get(urlToGet,callback to run when done)
  // callback params: err, res, data
  requestMod.get(nowPlayingUrl,(err,res,data)=>{
    const movieData = JSON.parse(data);
    console.log("nowPlayingUrl " + nowPlayingUrl)
      response.render('index', {
        movieData:movieData.results
    });
  })
});

router.get('/movie/:id',(request,response,next)=>{
  const movieId = request.params.id;
  const selectedMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`
  console.log("url is " + selectedMovieUrl)
  requestMod.get(selectedMovieUrl,(err,res,data)=>{
    const movieData = JSON.parse(data);
    response.render('single-movie',{
      movieData:movieData
    })
  })
})

router.post('/search',(req,res,next)=>{
    const movieSearch = encodeURI(req.body.movieSearch);
    const category = req.body.cat;
    const movieUrl = `${apiBaseUrl}/search/${category}?query=${movieSearch}&api_key=${apiKey}`

    requestMod.get(movieUrl,(err,response,searchData)=>{
        let parsedData = JSON.parse(searchData)
        if(category == 'person'){
            parsedData.results = parsedData.results[0].known_for
        }
        res.render('index',{
          movieData:parsedData.results
        })
      })
})

module.exports = router;

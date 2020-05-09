var express = require('express');
var router = express.Router();

const movies = require('../data/movies')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/most_popular',(req,res,next)=>{
  let page = req.query.page;

  if(page === undefined){page = 1}
  if(req.query.api_key !== '1234567'){
    res.json("invalid api key")
  } else{
    let results = movies.filter(movie =>{
      return movie.most_popular
      })
      const startingPoint = (page - 1) * 20;
      results = results.slice(startingPoint,startingPoint+19)
      res.json({results})
  }
})

module.exports = router;

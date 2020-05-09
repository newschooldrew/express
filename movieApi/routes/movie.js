var express = require('express');
var router = express.Router();
const movieDetails = require('../data/movieDetails')

const requireJSON = (req,res, next)=>{
    if (!req.is('json')){
        res.json("Please use JSON")
    } else{
      next()
    }
}

router.param('movieId',(req,res,next)=>{
  console.log("someone hit that route")   
  next()
})

router.get('/top_rated', (req, res, next)=>{
  let page = req.query .page;
  if(!page){return page = 1}
  const results = movieDetails.sort(function(a,b){
    return b.vote_average - a.vote_average;
  })
    const initialData = (page - 1) * 20;
    res.json(results.slice(initialData,initialData+19))
});

/* GET movie page. */
router.get('/:movieId', function(req, res, next) {
  const param = req.params.movieId;
  // const specificMovie = movieDetails.belongs_to_collection.param;
  const results = res.json(movieDetails.find(movie =>{
    // every time you pull something out of a URL, its a string
    return movie.id === Number(param)
  }))
  if(!results){
    res.json({
      msg:"Movie ID is wrong"
    })
  } else{
    res.json(results)
  }
});

router.post('/:movieId/rating', requireJSON ,(req,res,next)=>{
  const param = req.params.movieId;
  const userRating = req.body.value;

  if(userRating < .5 || userRating > 10){
    res.json("please keep the rating between .5 and 10")
  } else{
    res.json({
      msg: "thanks for your submission",
      status_code:200
    })
  }
  })

router.delete('/:movieId/rating', requireJSON,(req,res,next)=>{
    res.json({msg:"Rating deleted"})
})

module.exports = router;

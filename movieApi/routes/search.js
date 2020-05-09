var express = require('express');
var router = express.Router();
const peopleDetails = require('../data/people')
const movieDetails = require('../data/movies')

router.use((req,res,next)=>{
const searchTerm = req.query.query;
    if(!searchTerm){
        res.json({
            msg:"Query is required"
        })
    } else{
        next()
    }
})

/* GET search page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movie',(req,res,next)=>{
    const searchTerm = req.query.query;
    const results = movieDetails.filter(movie =>{
        found = movie.overview.includes(searchTerm) || movie.title.includes(searchTerm);
        return found
    })
    if(results){
        res.json({
        results
    })
    } else{
        res.json({
            msg:"sorry, no results"
        })
    }
})

router.get('/person',(req,res,next)=>{
    const searchTerm = req.query.query;
    const results = peopleDetails.filter(person =>{
        let found = person.name.includes(searchTerm);
        return found
    })
    if(results){
        res.json({
        results
    })
    } else{
        res.send("sorry, no results")
    }
})

module.exports = router;

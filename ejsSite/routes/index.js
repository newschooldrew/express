var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const date = new Date(1969,)
  res.set('Date',)
  res.render('index', { title: 'My new site!' });
});

module.exports = router;

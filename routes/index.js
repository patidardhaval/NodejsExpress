var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', message: 'Home Page!'});
});
/* GET aboutus page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', message: 'About Us Page!'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact', message: 'type hear'});
});

module.exports = router;

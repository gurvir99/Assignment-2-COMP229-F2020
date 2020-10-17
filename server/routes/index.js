/*Assignment 1
  Student: Gurvir Singh 301108852
  Course: Web Application Development SEC.004  COMP229004-2020F
  Date: October 09, 2020 */



var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login'});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me'});
});





module.exports = router;

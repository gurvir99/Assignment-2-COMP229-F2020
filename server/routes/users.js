
//Assignment 2
//Student: Gurvir Singh 301108852
//Course: Web Application Development SEC.004  COMP229004-2020F
//Date: October 23, 2020 -->

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

/*Assignment 1
  Student: Gurvir Singh 301108852
  Course: Web Application Development SEC.004  COMP229004-2020F
  Date: October 09, 2020 */



var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET Login page. */
router.get('/login', indexController.displayLoginPage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact me page. */
router.get('/contact', indexController.displayContactPage);





module.exports = router;

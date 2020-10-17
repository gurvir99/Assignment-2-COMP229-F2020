let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contacts Model
let Contact = require('../models/contact');

//GET Route for the Contacts List page - READ Operation
router.get('/', (req,res,next) => {
    Contact.find((err,ContactList) => {
       if(err)
       {
           return console.error(err);
       }
       else
       {
           console.log(ContactList);

           
       }

    });
});    

module.exports = router;
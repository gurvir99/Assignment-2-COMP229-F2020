//Assignment 2
//Student: Gurvir Singh 301108852
//Course: Web Application Development SEC.004  COMP229004-2020F
//Date: October 23, 2020 -->

let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);
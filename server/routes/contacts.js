let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contacts Model
let Contact = require('../models/contact');

let contactController = require('../controllers/contacts');

//GET Route for the Contacts List page - READ Operation
router.get('/', contactController.displayContactList);    


//GET Route for displaying the ADD page - CREATE Operation
router.get('/add', (req,res,next) => {
    res.render('businessContacts/add', {title: 'Add Contact'});
});

//POST Route for processing the ADD page - CREATE Operation
router.post('/add', (req,res,next) => {
    let newContact = Contact({
       "name": req.body.name,
       "number": req.body.number,
       "email": req.body.email
    });

    Contact.create(newContact,(err,Contact)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/contact-list')
        }
    })
});

//GET Route for displaying the EDIT page - UPDATE Operation
router.get('/edit/:id', contactController.displayEditPage);

//POST Route for processing the EDIT page - UPDATE Operation
router.post('/edit/:id', contactController.processEditPage);

//GET to perform Deletion - DELETE Operation
router.get('/delete/:id', contactController.performDelete);



module.exports = router;
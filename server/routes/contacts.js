let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contacts Model
let Contact = require('../models/contact');

//GET Route for the Contacts List page - READ Operation
router.get('/', (req,res,next) => {
    Contact.find((err,contactList) => {
       if(err)
       {
           return console.error(err);
       }
       else
       {
           //console.log(ContactList);

           res.render('businessContacts/contactList', {title: 'Contact List', ContactList: contactList})
       }

    });
});    


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
router.get('/edit/:id', (req,res,next) => {
  let id = req.params.id;

  Contact.findById(id,(err, contactToEdit) => {
     if(err)
     {
         console.log(err);
         res.end(err);
     }
     else
     {
         //show the edit view
         res.render('businessContacts/edit', {title:'Edit Contact', contact:contactToEdit})
     }
  });

});

//POST Route for processing the EDIT page - UPDATE Operation
router.post('/edit/:id', (req,res,next) => {
    let id = req.params.id

    let updatedContact = Contact({
        "_id":id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.updateOne({_id:id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    });

});

//GET to perform Deletion - DELETE Operation
router.get('/delete/:id', (req,res,next) => {
 let id = req.params.id;

 Contact.remove({_id: id}, (err) => {
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        //refresh the contact list
        res.redirect('/contact-list');
    }
 })
});



module.exports = router;
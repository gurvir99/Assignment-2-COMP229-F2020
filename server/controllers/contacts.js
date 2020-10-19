let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference 
let Contact = require('../models/contact');

module.exports.displayContactList = (req,res,next) => {
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
}    

module.exports.displayEditPage =  (req,res,next) => {
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
  
  }

  module.exports.processEditPage =  (req,res,next) => {
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

}

module.exports.performDelete = (req,res,next) => {
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
   }
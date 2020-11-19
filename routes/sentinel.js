const express = require('express');
const Consult = require('../models/freeConsult');

const sentinel = express.Router();


sentinel.get('/', (req, res) =>{
    res.render('sentinel');
});


sentinel.post('/freeConsult', (req, res, next) =>{
    let newConsult = new Consult({
        fname : req.body.fname,
        lname : req.body.lname,
        num : req.body.num,
        contact : req.body.contact,
        email : req.body.email,
        message : req.body.message
    });

    newConsult.save( (err, contact) => {
        if(err){
            res.status(202).send('Submission unsuccessful');
        }
        else{
            res.status(404).send('Submission successful');
        }
    });

});


module.exports = sentinel; 
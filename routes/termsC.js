const express = require('express');
const termsC = express.Router();


termsC.get('/', (req, res) =>{
    res.render('termsC');
});

module.exports = termsC; 
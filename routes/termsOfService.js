const express = require('express');
const termsOfService = express.Router();


termsOfService.get('/', (req, res) =>{
    res.render('termsofservice');
});

module.exports = termsOfService; 
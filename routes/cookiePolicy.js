const express = require('express');
const cookiePolicy = express.Router();


cookiePolicy.get('/', (req, res) =>{
    res.render('cookiepolicy');
});

module.exports = cookiePolicy; 
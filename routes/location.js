const express = require('express');
const location = express.Router();


location.get('/', (req, res) =>{
    res.render('location');
});

module.exports = location; 
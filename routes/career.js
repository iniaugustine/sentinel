const express = require('express');
const career = express.Router();


career.get('/', (req, res) =>{
    res.render('career');
});



module.exports = career; 
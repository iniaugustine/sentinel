const express = require('express');
const service = express.Router();


service.get('/', (req, res) =>{
    res.render('services');
});

module.exports = service; 
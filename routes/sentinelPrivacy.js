const express = require('express');
const sentinelPrivacy = express.Router();


sentinelPrivacy.get('/', (req, res) =>{
    res.render('sentinelprivacy');
});

module.exports = sentinelPrivacy; 
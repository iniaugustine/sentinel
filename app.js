const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv/config');

// Use Express
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Importing Routes
const service = require('./routes/service');
app.use('/services', service);

const career = require('./routes/career');
app.use('/career', career);

const contact = require('./routes/contact');
app.use('/contact', contact);

const cookiePolicy = require('./routes/cookiePolicy');
app.use('/cookiepolicy', cookiePolicy);

const location = require('./routes/location');
app.use('/location', location);

const SentinelPrivacy = require('./routes/sentinelPrivacy');
app.use('/sentinelPrivacy', SentinelPrivacy);

const termsC = require('./routes/termsC');
app.use('/termsC', termsC);

const termsOfService = require('./routes/termsOfService');
app.use('/termsOfService', termsOfService);

const sentinel = require('./routes/sentinel');
app.use('/', sentinel);


//Connect to Mongoose
mongoose.connect('process.env.DB_CONNECTION', { useNewUrlParser: true, useUnifiedTopology: true }, function(){
    console.log("Connected to Database");
});


const port = process.env.PORT || 5000;





// Listen
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
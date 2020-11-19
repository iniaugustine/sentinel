const mongoose = require('mongoose');

const consultSchema = mongoose.Schema({
    fname: {
        type:String,
        required : true
    },
    lname: {
        type:String,
        required : true
    },
    num: {
        type:String,
        required : true
    },
    contact: {
        type:String,
        required : true
    },
    email: {
        type:String,
        required : true
    },
    message: {
        type:String,
        required : true
    }
});

const Consult = module.exports = mongoose.model('Consult', consultSchema);
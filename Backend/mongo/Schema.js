const mongoose = require('mongoose');
require('dotenv').config()
    const schema = new mongoose.Schema({
        user:String,
        email:String,
        password:String
    },{
        versionKey:false
    });
module.exports = mongoose.model(process.env.USERS_COLLECTION,schema);
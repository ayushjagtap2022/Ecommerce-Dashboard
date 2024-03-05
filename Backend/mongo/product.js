const mongoose = require('mongoose');
require('dotenv').config()
const schema = new mongoose.Schema({
    Name:String,
    Price:Number,
    Company:String,
    Category:String,
},{
    versionKey:false
})
module.exports = mongoose.model(process.env.PRODUCTS_COLLECTION,schema)

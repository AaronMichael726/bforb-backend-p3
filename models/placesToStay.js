const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placesToStaySchema = new Schema({
    title: String, 
    bedPhoto: String,
    description: String,
    rating: Number
})


const Places = mongoose.model('Places', placesToStaySchema)
module.exports = Places
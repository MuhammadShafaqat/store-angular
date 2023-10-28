const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema({
            name:{
                type: String,
                require: true
            },
            icon:{
                type: String
            },
            color:{
                type: String
            }
})

module.exports = mongoose.model('Category', categorySchema)
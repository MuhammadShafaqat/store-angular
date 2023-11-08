const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new mongoose.Schema({
     id:Schema.Types.ObjectId,
        quantity:{
            type:Number,
            required: true
        },
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }

})

module.exports = mongoose.model('OrderItem', orderItemSchema)
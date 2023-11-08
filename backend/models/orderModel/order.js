const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
     id:Schema.Types.ObjectId,
      orderItems:[{

        type:mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem'
      }],
      shippingAddress1:{
      type: String,
      required: true
      },
      shippingAddress2:{
      type: String
      },
      zip:{
        type: String,
        required: true
     },
     country:{
        type:String,
        required: true
     },
     phone:{
        type:String,
        required: true
     },
     status:{
        type: String,
        required: true,
        default: 'Pending'
     },
     totalPrice:{
        type: Number
     },
     user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
     },
     dateOrdered:{
        type: Date,
        default: Date.now,
     }
})

module.exports = mongoose.model('Order', orderSchema)
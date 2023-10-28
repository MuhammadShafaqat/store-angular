const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    id:Schema.Types.ObjectId,
    title: {
        type: String,
        require: true
      },  
  description: {
    type: String,
    require: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    require: true
  },
  image: {
    type: String,
    default: ''
  },
  images:[{
      type: String
  }],
  price:{
    type:  Number,
    default: 0
  },
  rating: {
    rate: Number,
    count: Number
  }
    
})

module.exports = mongoose.model('Product', productSchema)
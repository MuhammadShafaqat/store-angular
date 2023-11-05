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
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Category',
    type: String,
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
    rate: Number    
  },
  isFeatured:{
    type: Boolean,
    default: false
}    
})

module.exports = mongoose.model('Product', productSchema)
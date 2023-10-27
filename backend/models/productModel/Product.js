const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    id:Schema.Types.ObjectId,
    title: {
        type: String,
        require: true
      },
  price: Number,
  description: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  rating: {
    rate: Number,
    count: Number
  }
    
})

module.exports = mongoose.model('Product', productSchema)
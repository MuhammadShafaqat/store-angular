const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new mongoose.Schema({
    email: String,
  token: String,
  created: { type: Date, default: Date.now },
})

const TokenModel = mongoose.model('Token', tokenSchema)
module.exports = TokenModel
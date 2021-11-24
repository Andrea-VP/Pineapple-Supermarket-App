const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,     
      required: true,
    },
    price: {
      type: Number,     
      required: true,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    dateEntry: {
      type: Date,
      default: Date.now(),
    },
  
});

module.exports = model('Products', productSchema);
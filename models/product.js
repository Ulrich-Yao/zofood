const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    desc: String,
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model('Product', productSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema for categories of the products
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

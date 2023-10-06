const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    timestamps: {
        required: true,
    },
});

const Category = mongoose.model('categories', CategorySchema);
module.exports = Category;
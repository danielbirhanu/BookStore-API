const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title is required"],
        trim: true,
        maxLength: [100, "Book title cannot be more than 100 characters"]
    },
    author: {
        type: String,
        required: [true, "Book author is required"],
        trim: true
    },
    year: {
        type: Number,
        required: [true, "Publication year is required"],
        min: [1000, "Year must be atleast 1000"],
        max: [new Date().getFullYear(), "year cannot be in the future"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Book', BookSchema)
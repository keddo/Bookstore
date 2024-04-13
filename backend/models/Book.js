import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
     title: {
        type: String,
        required: true
     },
    authors: {
        type: [String],
        required: true
    },
    description: {
       type: String,
       required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    language: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    ISBN: {
        type: String
    },
    publicationDate: {
        type: Date,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    reviews: [
        {user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        rating: Number,
        comment: String
    }],
    availableQuantity: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true } );

export const Book = mongoose.model('Book', bookSchema);
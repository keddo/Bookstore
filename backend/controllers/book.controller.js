import {Book} from '../models/Book.js';
import {CustomError, asyncWrapper} from '../utils/index.js';
import {NO_BOOKS_FOUND, NO_BOOK_FOUND, ALL_FIELDS_REQUIRED} from '../constants/errorCodes.js';

const getAllBooks = asyncWrapper(async (req, res) => {
    const books = await Book.find({});
    if (!books) {
        throw new CustomError(NO_BOOKS_FOUND, "No books Found", 401)
    }
    res.status(200).send(books)
   
});

const getBook = asyncWrapper(async (req, res) => {
    const {id} = req.params;
    const book = await Book.findById({_id: id});
    if (!book) {
        throw new CustomError(NO_BOOK_FOUND, "No book Found", 401)
    }
    res.status(200).send(book)
   
});

const createBook = asyncWrapper(async (req, res) => {
    const {title, author, publishYear} = req.body;
    if(!title || !author || !publishYear ){
        throw new CustomError(ALL_FIELDS_REQUIRED, 'Send all required fields', 400)
    }

    const book = await  Book.create({title, author, publishYear})
    return res.status(201).send(book);
});

const updateBook = asyncWrapper(async (req, res) => {
    const {id} = req.params;
    const {title, author, publishYear} = req.body;
    if(!title || !author || !publishYear ){
        throw new CustomError(ALL_FIELDS_REQUIRED, 'Send all required fields', 400)
    }

    const book = await  Book.findByIdAndUpdate({_id: id},{title, author, publishYear})
    return res.status(200).send(book);
});

const deleteBook = asyncWrapper(async (req, res) => {
    const {id} = req.params;
    const book = await  Book.findByIdAndDelete({_id: id})
    return res.status(200).send(book);
});

export {createBook, getAllBooks, getBook, updateBook, deleteBook};
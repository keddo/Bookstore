import {Book} from '../models/Book.js';
import {CustomError, asyncWrapper} from '../utils/index.js'
import {NO_BOOK_FOUND, ALL_FIELDS_REQUIRED} from '../constants/errorCodes.js'
const getAllBooks = asyncWrapper(async (req, res) => {
    const books = await Book.find({});
    if (!books) {
        throw new CustomError(NO_BOOK_FOUND, "No books Found", 401)
    }
    res.status(200).send(books)
   
});

const createBook = asyncWrapper(async (req, res) => {
    const {title, author, publishYear} = req.body;
    if(!title || !author || !publishYear ){
        throw new CustomError(ALL_FIELDS_REQUIRED, 'Send all required fields', 400)
    }

    const book = await  Book.create({title, author, publishYear})
    return res.status(201).send(book);
});

export {createBook, getAllBooks};
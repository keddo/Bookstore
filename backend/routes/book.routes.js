import express from 'express';
import { createBook, getAllBooks, getBook, updateBook, deleteBook } from '../controllers/book.controller.js'
const router = express.Router()

router.get('/', getAllBooks);
router.get('/:id', getBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.post('/', createBook);

export default router;
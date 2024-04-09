import express from 'express';
import { createBook, getAllBooks } from '../controllers/book.controller.js'
const router = express.Router()

router.get('/', getAllBooks);
router.post('/', createBook);

export default router;
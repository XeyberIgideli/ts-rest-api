import express from "express"
import { createBook } from "../controllers/Book"

const router = express.Router()

router.post('/create', createBook)
router.get('/list', createBook)
router.get('/get/:bookId', createBook)
router.patch('/update/:bookId', createBook)
router.delete('/delete/:bookId', createBook)

export default router
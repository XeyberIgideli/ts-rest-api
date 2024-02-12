import { NextFunction, Request, Response } from "express"
import Logger from "../lib/logger";
import Book from "../models/Book";

async function createBook (req: Request, res: Response, next: NextFunction) {
    const book = req.body;
    try {
        await Book.create(book)
    } catch (err) {
        Logger.error(err)        
    }
}

export {
    createBook
}
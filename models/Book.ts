import mongoose, {Schema, Document} from "mongoose";

export interface IBook {
    name: string,
    author: string
}

export interface IBookModel extends IBook, Document {} 

const BookSchema:Schema = new Schema({
      name: {
        type: String,
        required:true
      },
      author: {
        type: String,
        required:true
      }
})

export default mongoose.model<IBookModel>('Book', BookSchema)
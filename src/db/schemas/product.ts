import {Schema} from 'mongoose';
import {db} from '../connection'

const productSchema = new Schema({
    name: String,
    brand: String,
    type: String
});

export interface ProductInterface {
    name: string,
    brand: string,
    type: string
}

export const Product = db.model("Product", productSchema);
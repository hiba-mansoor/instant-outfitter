import {Schema} from 'mongoose';
import {db} from '../connection'

const productSchema = new Schema({
    name: String,
    brand: String,
    type: String
});

export const Product = db.model("Product", productSchema);
import { Schema, model } from 'mongoose';
const ProductSchema = new Schema({
    id: String,
    name: { type: String, required: true },
    price: { type: Float, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});
const Product = model('product', ProductSchema);
export default Product;
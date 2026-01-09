import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  imageUrl: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  imageUrl: { type: String, required: true },
});

export default mongoose.model<IProduct>('Product', ProductSchema);

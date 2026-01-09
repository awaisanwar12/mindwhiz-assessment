// Mock User Model - Not storing in DB for this simple mock auth requirements unless needed, 
// but creating the structure.
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  role: 'admin' | 'customer';
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'customer'], default: 'customer' },
});

export default mongoose.model<IUser>('User', UserSchema);

import { Schema, Document, model } from 'mongoose';

export interface IAdmin extends Document {
    email: string;
    password: string
}

const userSchema = new Schema<IAdmin>({
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },


}, { timestamps: true });

export const admin = model<IAdmin>('admin', userSchema);
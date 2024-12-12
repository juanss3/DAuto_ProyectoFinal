import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    placa: string;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    placa: {
        type: String,
        required: true
    },

}, { timestamps: true });

export const User = model<IUser>('User', userSchema);

import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    direccion: string;
    numero: string;
    membresia: string;
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
    direccion: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    membresia: {
        type: String,
        required: true
    },
    placa: {
        type: String,
        required: true
    },

}, { timestamps: true });

export const User = model<IUser>('User', userSchema);

import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    membership: Schema.Types.ObjectId | null;
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
    membership: {
        type: Schema.Types.ObjectId,
        ref: 'Membership',
        default: null // Por defecto, el usuario no tiene membresía asignada
    },
}, { timestamps: true });

export const User = model<IUser>('User', userSchema);

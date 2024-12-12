import { Schema, model, Document } from "mongoose";

export interface IMembership extends Document {
    user: Schema.Types.ObjectId; 
    type: 'carro' | 'camioneta' | 'C';
    price: number;
    duration: number;
    description: string;
}

const membershipSchema = new Schema<IMembership>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User", 
        required: true,
    },

    type: { 
        type: String, 
        required: true, 
        enum: ['carro', 'camioneta', 'C'], 
    },

    price: {
        type: Number,
        required: true,
        enum: [100000, 120000, 180000],
        },
    duration: { type: Number, required: true },

    description: { type: String, required: true },

}, { timestamps: true });

export const Membership = model<IMembership>("Membership", membershipSchema);

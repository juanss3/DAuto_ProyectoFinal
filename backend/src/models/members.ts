import { Schema, model, Document } from "mongoose";

export interface IMembership extends Document {
    type: string;
    price: number;
    duration: number;
}

const membershipSchema = new Schema<IMembership>({
    type: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
}, { timestamps: true });

export const Membership = model<IMembership>("Membership", membershipSchema);


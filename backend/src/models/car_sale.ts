import { Schema, model, Document } from "mongoose";

export interface ICarSale extends Document {
    user: Schema.Types.ObjectId;
    carDetails: string;
    price: number;
    dateofsale: Date;
}

const carSaleSchema = new Schema<ICarSale>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    carDetails: { type: String, required: true },
    price: { type: Number, required: true },
    dateofsale: { type: Date, default: Date.now },
}, { timestamps: true });

export const CarSale = model<ICarSale>("CarSale", carSaleSchema); 
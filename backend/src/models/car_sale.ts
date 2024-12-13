import { Schema, model, Document } from "mongoose";

export interface ICarSale extends Document {
    nombre: string
    carDetails: string;
    price: number;
    dateofsale: Date;
    imageUrl: string;
}

const carSaleSchema = new Schema<ICarSale>({
    nombre: {type: String, required: true },
    carDetails: { type: String, required: true },
    price: { type: Number, required: true },
    dateofsale: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true }, 
}, { timestamps: true });

export const CarSale = model<ICarSale>("CarSale", carSaleSchema); 
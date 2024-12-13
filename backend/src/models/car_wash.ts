import {Schema,model,Document} from "mongoose";


export interface ICarWash extends Document {
    name: string;
    date: Date;
    serviceType: string;
    price: string;
    description: string;
}

const carWashSchema = new Schema<ICarWash>({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    serviceType: { type: String, required: true, enum: ['basico', 'intermedio', 'premium', "miembro"], },
    price: { type: String, required: true, enum: ["60000", "100000", "180000", "0"], },
    description: { type: String, required: true },
}, { timestamps: true });

export const CarWash = model<ICarWash>("CarWash", carWashSchema);
import {Schema,model,Document} from "mongoose";

export interface ICarWash extends Document {
    user: Schema.Types.ObjectId;
    date: Date;
    serviceType: string;
    price: number;
}

const carWashSchema = new Schema<ICarWash>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    serviceType: { type: String, required: true },
    price: { type: Number, required: true },
}, { timestamps: true });

export const CarWash = model<ICarWash>("CarWash", carWashSchema);
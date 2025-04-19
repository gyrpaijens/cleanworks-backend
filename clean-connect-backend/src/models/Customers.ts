import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomer extends Document {
    name: string;
    region: string;
    available: boolean;
    address: string;
}

const CustomerSchema: Schema = new Schema({
    name: { type: String, required: true },
    region: { type: String, required: true },
    available: { type: Boolean, default: true },
    address: String,
});

export default mongoose.model<ICustomer>('Customer', CustomerSchema);
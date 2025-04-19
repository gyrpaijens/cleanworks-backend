import mongoose, { Schema, Document } from 'mongoose';

export interface ICleaner extends Document {
    name: string;
    region: string;
    available: boolean;
}

const CleanerSchema: Schema = new Schema({
    name: { type: String, required: true },
    region: { type: String, required: true },
    available: { type: Boolean, default: true }
});

export default mongoose.model<ICleaner>('Cleaner', CleanerSchema);
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
import cleanerRoutes from './routes/CleanerRoutes';
app.use('/api/cleaners', cleanerRoutes);
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI || '')
    .then(() => {
        console.log('✅ MongoDB connected');
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Mongo error:', err));
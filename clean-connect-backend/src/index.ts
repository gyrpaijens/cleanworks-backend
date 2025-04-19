import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// ✅ CORS - minimale, werkende configuratie voor dev
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// ✅ Body-parser
app.use(express.json());

// ✅ Route import
import cleanerRoutes from './routes/CleanerRoutes';
app.use('/api/cleaners', cleanerRoutes);
app.get('/', (req, res) => {
    res.send('API is running 🚀');
});

// ✅ Database connectie
mongoose.connect(process.env.MONGO_URI || '')
    .then(() => {
        console.log('✅ MongoDB connected');
        app.listen(process.env.PORT || 5000, () => {
            console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
        });
    })
    .catch(err => {
        console.error('❌ MongoDB error:', err);
    });

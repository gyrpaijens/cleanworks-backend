import express, { Request, Response } from 'express';
import Cleaner, { ICleaner } from '../models/Cleaners';

const router = express.Router();

// GET /api/cleaners
router.get('/', async (_req: Request, res: Response) => {
    try {
        const cleaners: ICleaner[] = await Cleaner.find();
        res.json(cleaners);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching cleaners' });
    }
});

// POST /api/cleaners
router.post('/', async (req: Request, res: Response) => {
    try {
        const { name, region } = req.body;
        const newCleaner = new Cleaner({ name, region });
        const savedCleaner = await newCleaner.save();
        res.status(201).json(savedCleaner);
    } catch (err) {
        res.status(400).json({ message: 'Error creating cleaner' });
    }
});

export default router;
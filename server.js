import express from 'express';
import prisma from './config/db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
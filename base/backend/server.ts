import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
const recipeRoutes = require('./routes/recipeRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    next();
});

app.use('/api/recipes', recipeRoutes);
app.use('/api/user', userRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.APP_PORT, () => {
            console.log(`Server is running on port ${process.env.APP_PORT}`);
        })
    })
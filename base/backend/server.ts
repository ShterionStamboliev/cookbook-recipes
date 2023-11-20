import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'

dotenv.config();

const app: Express = express();
const port = 4000;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    })
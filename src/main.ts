import express from 'express';
import  { Express } from 'express';
import cors from 'cors';
import notesRoutes from './routes/notesRoutes.js';
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const {  PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use('/api', notesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
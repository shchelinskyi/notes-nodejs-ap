import express from 'express';
import cors from 'cors';
import notesRoutes from './routes/notesRoutes.js';
import dotenv from "dotenv";
import { resolve } from 'path';
dotenv.config();
const app = express();
const { PORT } = process.env;
app.use(cors());
app.use(express.json());
app.use('/api', notesRoutes);
app.use(express.static(resolve(process.cwd(), 'static')));
app.get('*', (req, res) => {
    res.sendFile(resolve(process.cwd(), 'src', 'static', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=main.js.map
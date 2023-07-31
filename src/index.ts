import express from 'express';
import  { Express } from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser';
import notesRoutes from './routes/notesRoutes.ts';

const app: Express = express();
const port = 3000;

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());
app.use('/api', notesRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
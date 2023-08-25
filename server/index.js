import express from 'express';
import api from './routes/api.js';
import createRouter from './routes/createacc.js'
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.listen(PORT);

app.use('/api/v1/login', api);
app.use('/api/v1/create', createRouter)
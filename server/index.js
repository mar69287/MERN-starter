import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('hello from Server Side!')
});

const startServer = async () => {
    app.listen(8080, () => console.log('Server started on port port http://localhost:8080'));
};

startServer()
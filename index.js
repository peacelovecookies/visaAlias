import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import getVisaCards from './controllers/getVisaCards.js';
import resolve from './controllers/vaResolve.js';
import create from './controllers/vaCreate.js';
import update from './controllers/vaUpdate.js';
import vaDelete from './controllers/vaDelete.js';
import get from './controllers/vaGet.js';

const app = express();

const port = 3333;
app.listen(port, () => console.log(`Server running on port ${port}`));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/getVisaCards', getVisaCards);
app.post('/resolve', resolve);
app.post('/create', create);
app.post('/update', update);
app.post('/delete', vaDelete);
app.post('/get', get);

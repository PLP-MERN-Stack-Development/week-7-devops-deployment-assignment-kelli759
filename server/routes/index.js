import helmet from 'helmet';
app.use(helmet());

import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5000;

import morgan from 'morgan';
app.use(morgan('combined'));

import express from 'express';
import routes from './controllers';
import 'reflect-metadata';
import { AppDataSource } from './data-source';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

AppDataSource.initialize();

app.use(express.json()); // Body parser

app.use('/', routes);

app.listen(process.env.PORT, ()=> {
    console.log('Dot API working just fine !!');
});
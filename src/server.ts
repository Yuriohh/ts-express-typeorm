import "reflect-metadata";
import express from 'express';
import { createConnection } from "typeorm";

import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

createConnection();

app.listen(3000);

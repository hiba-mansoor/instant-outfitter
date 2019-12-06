import 'source-map-support/register';
import express from 'express';
import serverlessHttp from 'serverless-http';
import { productRouter } from './src/routes/product';

const app = express();

app.use('/mentorship', productRouter);

export const handler = serverlessHttp(app);

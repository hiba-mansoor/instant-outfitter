import 'source-map-support/register';
import express from 'express';
import serverlessHttp from 'serverless-http';

const app = express();

app.get('/test', function (_req: express.Request, res: express.Response) {
    res.send('Hello World')
});

export const handler = serverlessHttp(app);

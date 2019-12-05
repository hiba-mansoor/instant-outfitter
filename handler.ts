import 'source-map-support/register';
import express from 'express';
import serverlessHttp from 'serverless-http';

const app = express();
const router = express.Router();

router.get('/test', (_req: express.Request, res: express.Response) => {
  res.send('Hello World');
});

app.use('/mentorship', router);

export const handler = serverlessHttp(app);

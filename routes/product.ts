import express from 'express';

const router = express.Router();

router.get('/product', (_req: express.Request, res: express.Response) => {
    res.json({key: process.env.auth_api_key});
});

export const productRouter = router;
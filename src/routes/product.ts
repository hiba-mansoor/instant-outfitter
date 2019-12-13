import express from 'express';

const router = express.Router();

const wrapAsync = (fn) => (_req: express.Request, res: express.Response, next: Function) => {
     const functionResult = fn(_req, res);
     return Promise.resolve(functionResult).catch(error => next(error));
};

router.get('/product', (_req: express.Request, res: express.Response) => {
    console.log('in /product handler');
    res.send('data');
});

router.get('/product2', wrapAsync(async (_req: express.Request, res: express.Response) => {
    const p = new Promise((resolve, reject) => {
        resolve(2)
    });
    // p.then(data => res.send(data))
    const data = await p;
    throw new Error('error');
    res.send(data);
}));

router.get('/product3', (_req: express.Request, res: express.Response) => {
    res.json({key: process.env.auth_api_key});
});

export const productRouter = router;

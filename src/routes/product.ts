import express from 'express';
import {Product} from "../db/schemas/product";

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
    const product = new Product({ name: 'John23', brand: "182", type: "socks2" });
    await product.save((error) => {
        if (error) {
            res.send(error);
            return console.log(`Error has occurred: ${error}`);
        }
        res.send(product);
    });
}));

router.get('/product3', (_req: express.Request, res: express.Response) => {
    res.json({key: process.env.auth_api_key});
});

export const productRouter = router;

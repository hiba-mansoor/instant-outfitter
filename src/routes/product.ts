import express from 'express';
import {Product, ProductInterface} from "../db/schemas/product";

const router = express.Router();

const wrapAsync = (fn) => (_req: express.Request, res: express.Response, next: Function) => {
     const functionResult = fn(_req, res);
     return Promise.resolve(functionResult).catch(error => next(error));
};

router.post('/product', wrapAsync(async (_req: express.Request, res: express.Response) => {
    const p:ProductInterface = {name: _req.body.name, brand: _req.body.brand, type: _req.body.type};
    const product = new Product(p);
    await product.save();
    res.send(product);
    console.log(_req.body);
}));

router.get('/product/:productId', wrapAsync(async (_req: express.Request, res: express.Response) => {
    const productId = _req.params.productId;
    const product = await Product.find({_id: productId});
    res.send(product);
}));

export const productRouter = router;

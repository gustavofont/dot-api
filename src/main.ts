import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('test');
});

app.listen(port, ()=> {
    console.log('Dot API working just fine !!');
});
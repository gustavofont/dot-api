import { Router, Request, Response } from 'express';
import CardService from 'services/Card';

const CardRouter = Router();

CardRouter.post('/', async (req:Request, res: Response) => {
    const response = await CardService.genreateCard(1);
    return res.status(response.statusCode).send(response.data ?? response.message);
});

export default CardRouter;


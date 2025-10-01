import { Router, Request, Response } from 'express';
import userService from 'services/User';

const UserRouter = Router();

UserRouter.post('/', async (req:Request, res: Response) => {
    const userData = req.body;
    const response = await userService.createUser(userData);
    return res.status(response.statusCode).send(response.data ?? response.message);
});

export default UserRouter;


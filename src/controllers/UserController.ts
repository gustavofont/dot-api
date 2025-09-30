import { Router, Request, Response } from 'express';
import UserService from 'services/UserService';

const UserRouter = Router();

const userService = new UserService;

UserRouter.post('/', async (req:Request, res: Response) => {
    const userData = req.body;
    const response = await userService.createUser(userData);
    return res.status(response.statusCode).send(response.data ?? response.message);
});

export default UserRouter;


import { Router } from 'express';
import AuthRouter from './AuthController';
import UserRouter from './UserController';

const routes = Router();

routes.use('/auth', AuthRouter);

routes.use('/user', UserRouter);

export default routes;
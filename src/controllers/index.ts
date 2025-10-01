import { Router } from 'express';
import AuthRouter from './Auth';
import UserRouter from './User';
import CardRouter from './Card';

const routes = Router();

routes.use('/auth', AuthRouter);

routes.use('/user', UserRouter);

routes.use('/card', CardRouter);

export default routes;
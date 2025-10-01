import { Router } from 'express';
import AuthRouter from './Auth';
import UserRouter from './User';

const routes = Router();

routes.use('/auth', AuthRouter);

routes.use('/user', UserRouter);

export default routes;
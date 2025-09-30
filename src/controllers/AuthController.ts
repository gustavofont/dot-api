import { Router, Request, Response } from 'express';

const AuthController =  Router();

AuthController.get('/', (req: Request, res: Response) => {
   res.send('auth test'); 
});

export default AuthController;
import { Router, Request, Response } from 'express';
import authService from 'services/Auth';

const AuthController =  Router();

AuthController.post('/login', async (req: Request, res: Response) => {
   const { email, password }= req.body;
   if(!email || !password) {
      res.status(400).send({message: 'email or password not informed'});
   }
   const response = await authService.login(email, password);
   res.status(response.statusCode).send(response.message ?? response.data);
});

export default AuthController;
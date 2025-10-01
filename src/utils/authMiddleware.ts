import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';

export default function authenticate(req: Request, res: Response, next:NextFunction) {
    const authHeader = req.headers['authorization'];

    if(!authHeader) {
        return res.status(401).send({message: 'Missing Token'});
    }

    const token = authHeader.split(' ')[1];

    try {
        const secret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secret);

        (req as any).user = decoded;
    } catch (error) {
        return res.status(401).send({ message: 'Invalid Token' });
    }
}


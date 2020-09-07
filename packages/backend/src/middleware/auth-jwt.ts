import { config } from '../config';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import { RequestHandler } from 'express';

export const verifyToken: RequestHandler = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({error: {message: 'No token provided!'}});
  }

  jwt.verify(token as string, config.jwtSecret, (err: VerifyErrors | null) => {
    if (err) {
      return res.status(401).send({error: {message: 'Unauthorized!'}});
    }
    next();
  });
};

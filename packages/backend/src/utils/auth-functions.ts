import { User } from '@todo-app/common';
import jwt from 'jsonwebtoken';
import { config } from '../config';

export function generateToken(user: User) {
  const u = {
    email: user.email,
    id: user.id,
  };
  return jwt.sign(u, config.jwtSecret, {
    expiresIn: 60 * 60 * 24, // expires in 24 hours
  });
}

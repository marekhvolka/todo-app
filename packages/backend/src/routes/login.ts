import { LoginRequest, LoginResponse, User } from '@todo-app/common';
import { compare } from 'bcrypt';
import { RequestHandler } from 'express';
import { getRepository } from 'typeorm';
import { generateToken } from '../utils/auth-functions';

export const loginRequestHandler: RequestHandler<any, LoginResponse, LoginRequest> = async (req, res) => {
  const UserRepository = getRepository(User);

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.send({
      error: {
        message: 'Please enter both email and password'
      }
    });
  }

  const user = await UserRepository.findOne({email});

  if (!user) {
    return res.send({
      error: {
        message: 'Invalid credentials!'
      }
    });
  }

  const valid = await compare(password, user.passwordHash);

  if (!valid) {
    return res.send({
      error: {
        message: 'Invalid credentials!'
      }
    });
  }

  const token = generateToken(user);

  await UserRepository.update({email}, {token});

  res.json({
    user: {
      ...user,
      token
    },
    error: undefined
  });
};

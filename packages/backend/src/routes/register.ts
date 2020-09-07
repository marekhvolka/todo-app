import { RegisterRequest, RegisterResponse, User } from '@todo-app/common';
import { hash } from 'bcrypt';
import { RequestHandler } from 'express';
import { getRepository } from 'typeorm';
import { generateToken } from '../utils/auth-functions';

export const registerRequestHandler: RequestHandler<any, RegisterResponse, RegisterRequest> = async (req, res) => {
  const UserRepository = getRepository<User>(User);

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.send({
      error: {
        message: 'Please enter both email and password'
      }
    });
  }

  const existedUser = await UserRepository.findOne({email});

  if (existedUser) {
    return res.send({
      error: {
        message: 'User already existed'
      }
    });
  }

  const userData = {
    email,
    role: 'player',
    passwordHash: await hash(password.trim(), 10),
  };

  await UserRepository.save({
    ...userData,
    token: generateToken(userData)
  });

  res.json({
    error: undefined,
  });
};

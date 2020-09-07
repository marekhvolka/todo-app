import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import dotenv from 'dotenv';
dotenv.config();

import { config } from './config';
import { loginRequestHandler } from './routes/login';
import { registerRequestHandler } from './routes/register';
import { createConnection } from 'typeorm';
import { entities } from '@todo-app/common';
import { allTasksRequestHandler } from './routes/all-tasks';
import { addTaskRequestHandler } from './routes/add-task';
import { removeTaskRequestHandler } from './routes/remove-task';
import { updateTaskRequestHandler } from './routes/update-task';
import { verifyToken } from './middleware/auth-jwt';

(async () => {
  await createConnection({
    useUnifiedTopology: true,
    type: 'mongodb',
    url: `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`,
    port: 27017,
    logging: true,
    // database: config.dbName,
    // username: config.dbUser,
    // password: config.dbPassword,
    entities,
  });

  const app = express();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(compression());
  app.use(cors());
  app.use(helmet());

  app.post('/login', loginRequestHandler);
  app.post('/register', registerRequestHandler);

  app.post('/all-tasks', [verifyToken], allTasksRequestHandler);
  app.post('/add-task', [verifyToken], addTaskRequestHandler);
  app.post('/update-task', [verifyToken], updateTaskRequestHandler);
  app.post('/remove-task', [verifyToken], removeTaskRequestHandler);

  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
})();

import { AllTasksRequest, AllTasksResponse, Task } from '@todo-app/common';
import { RequestHandler } from 'express';
import { getRepository } from 'typeorm';

export const allTasksRequestHandler: RequestHandler<any, AllTasksResponse, AllTasksRequest> = async (req, res) => {
  const TaskRepository = getRepository(Task);

  const userId = req.body.userId;

  if (!userId) {
    return res.send({
      error: {
        message: 'No user id provided'
      }
    });
  }

  const tasks = await TaskRepository.find({userId});

  res.json({
    tasks,
    error: undefined
  });
};

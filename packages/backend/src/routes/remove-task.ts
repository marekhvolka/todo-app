import { RemoveTaskRequest, RemoveTaskResponse, Task } from '@todo-app/common';
import { RequestHandler } from 'express';
import { getRepository } from 'typeorm';

export const removeTaskRequestHandler: RequestHandler<any, RemoveTaskResponse, RemoveTaskRequest> = async (req, res) => {
  const TaskRepository = getRepository(Task);

  await TaskRepository.delete({id: req.body.taskId});

  res.json({
    error: undefined
  });
};

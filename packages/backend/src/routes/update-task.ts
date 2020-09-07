import { Task, UpdateTaskRequest, UpdateTaskResponse } from '@todo-app/common';
import { RequestHandler } from 'express';
import { getRepository } from 'typeorm';

export const updateTaskRequestHandler: RequestHandler<any, UpdateTaskResponse, UpdateTaskRequest> = async (req, res) => {
  const TaskRepository = getRepository(Task);

  const taskData = req.body.task;
  try {
    await TaskRepository.update(taskData.id!, taskData);

    res.json({
      error: undefined
    });
  } catch (e) {
    res.json({
      error: {
        message: 'Update not successful'
      }
    });
  }
};

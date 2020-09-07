import { AddTaskRequest, AddTaskResponse, Task } from '@todo-app/common';
import { RequestHandler } from 'express';
import { getRepository } from 'typeorm';

export const addTaskRequestHandler: RequestHandler<any, AddTaskResponse, AddTaskRequest> = async (req, res) => {
  const TaskRepository = getRepository(Task);

  const taskData = req.body.task;

  const task = await TaskRepository.save({...taskData});

  res.json({
    task: task,
    error: undefined
  });
};

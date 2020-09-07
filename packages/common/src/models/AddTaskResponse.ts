import { Task } from './Task';
import { ResponseError } from './ResponseError';

export type AddTaskResponse = {
  error?: ResponseError
  task?: Task
}

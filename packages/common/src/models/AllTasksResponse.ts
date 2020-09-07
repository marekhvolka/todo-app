import { Task } from './Task';
import { ResponseError } from './ResponseError';

export type AllTasksResponse = {
  error?: ResponseError
  tasks?: Task[]
}

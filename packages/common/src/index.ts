import { Task } from './models/Task';
import { User } from './models/User';

export const entities = [
  Task,
  User,
];

export * from './models/Task';
export * from './models/User';

export * from './models/ResponseError';

export * from './models/LoginRequest';
export * from './models/LoginResponse';

export * from './models/RegisterRequest';
export * from './models/RegisterResponse';

export * from './models/AllTasksRequest';
export * from './models/AllTasksResponse';

export * from './models/AddTaskRequest';
export * from './models/AddTaskResponse';

export * from './models/UpdateTaskRequest';
export * from './models/UpdateTaskResponse';

export * from './models/RemoveTaskRequest';
export * from './models/RemoveTaskResponse';

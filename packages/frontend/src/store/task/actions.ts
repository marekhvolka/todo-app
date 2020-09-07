import { Task } from '@todo-app/common';

export enum TaskActionTypes {
  ADD_TASK = 'ADD_TASK',
  ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS',

  REMOVE_TASK = 'REMOVE_TASK',
  REMOVE_TASK_SUCCESS = 'REMOVE_TASK_SUCCESS',

  UPDATE_TASK = 'UPDATE_TASK',
  UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS',

  FETCH_TASKS = 'FETCH_TASKS',
  FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS'
}

export class AddTaskAction {
  type: typeof TaskActionTypes.ADD_TASK = TaskActionTypes.ADD_TASK;

  payload: Task;

  constructor(task: Task) {
    this.payload = task;
  }
}

export class AddTaskSuccessAction {
  type: typeof TaskActionTypes.ADD_TASK_SUCCESS = TaskActionTypes.ADD_TASK_SUCCESS;

  payload: Task;

  constructor(task: Task) {
    this.payload = task;
  }
}

export class RemoveTaskAction {
  type: typeof TaskActionTypes.REMOVE_TASK = TaskActionTypes.REMOVE_TASK;

  payload: string;

  constructor(taskId: string) {
    this.payload = taskId;
  }
}

export class RemoveTaskSuccessAction {
  type: typeof TaskActionTypes.REMOVE_TASK_SUCCESS = TaskActionTypes.REMOVE_TASK_SUCCESS;

  payload: string;

  constructor(taskId: string) {
    this.payload = taskId;
  }
}

export class UpdateTaskAction {
  type: typeof TaskActionTypes.UPDATE_TASK = TaskActionTypes.UPDATE_TASK;

  payload: Task;

  constructor(task: Task) {
    this.payload = task;
  }
}

export class UpdateTaskSuccessAction {
  type: typeof TaskActionTypes.UPDATE_TASK_SUCCESS = TaskActionTypes.UPDATE_TASK_SUCCESS;

  payload: Task;

  constructor(task: Task) {
    this.payload = task;
  }
}

export class FetchTasksAction {
  type: typeof TaskActionTypes.FETCH_TASKS = TaskActionTypes.FETCH_TASKS;
}

export class FetchTasksSuccessAction {
  type: typeof TaskActionTypes.FETCH_TASKS_SUCCESS = TaskActionTypes.FETCH_TASKS_SUCCESS;

  payload: Task[];

  constructor(tasks: Task[]) {
    this.payload = tasks;
  }
}

export type TaskAction =
  AddTaskAction |
  AddTaskSuccessAction |
  RemoveTaskAction |
  RemoveTaskSuccessAction |
  UpdateTaskAction |
  UpdateTaskSuccessAction |
  FetchTasksAction |
  FetchTasksSuccessAction;


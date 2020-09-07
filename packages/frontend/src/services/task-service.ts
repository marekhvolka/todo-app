import { config } from '../config';
import { authHeader } from './auth-header';
import axios, { AxiosResponse } from 'axios';
import { AddTaskResponse, AllTasksResponse, RemoveTaskResponse, Task, UpdateTaskResponse } from '@todo-app/common';

export const fetchTasks = (userId: string): Promise<AxiosResponse<AllTasksResponse>> | undefined => {
  try {
    return axios.post(config.backendUrl + '/all-tasks', {userId}, {headers: authHeader()});
  } catch (error) {
    console.log(error);
  }
};

export const addTask = (task: Task): Promise<AxiosResponse<AddTaskResponse>> | undefined => {
  try {
    return axios.post(config.backendUrl + '/add-task', {task}, {headers: authHeader()});
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (task: Task): Promise<AxiosResponse<UpdateTaskResponse>> | undefined => {
  try {
    return axios.post(config.backendUrl + '/update-task', {task}, {headers: authHeader()});
  } catch (error) {
    console.log(error);
  }
};

export const removeTask = (taskId: string): Promise<AxiosResponse<RemoveTaskResponse>> | undefined => {
  try {
    return axios.post(config.backendUrl + '/remove-task', taskId, {headers: authHeader()});
  } catch (error) {
    console.log(error);
  }
};

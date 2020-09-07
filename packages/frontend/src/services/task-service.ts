import { config } from '../config';
import { authHeader } from './auth-header';
import axios from 'axios';
import { Task } from '@todo-app/common';

export const fetchTasks = (userId: string) => {
  try {
    return axios.post(config.backendUrl + '/all-tasks', {userId}, {headers: authHeader()});
  } catch (error) {
    console.log(error);
  }
};

export const addTask = (task: Task) => {
  try {
    return axios.post(config.backendUrl + '/add-task', {task}, {headers: authHeader()});
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (task: Task) => {
  try {
    return axios.post(config.backendUrl + '/update-task', {task}, {headers: authHeader()});
  } catch (error) {
    console.log(error);
  }
};

export const removeTask = (taskId: string) => {
  try {
    return axios.post(config.backendUrl + '/remove-task', taskId, {headers: authHeader()});
  } catch (error) {
    console.log(error);
  }
};

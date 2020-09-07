import { TaskAction, TaskActionTypes } from './actions';
import { Task } from '@todo-app/common';

export type TaskState = {
  tasks: Task[];
};

export const defaultState: TaskState = {
  tasks: [],
};

export const taskReducer = (state: TaskState = defaultState, action: TaskAction): TaskState => {
  switch (action.type) {

    case TaskActionTypes.ADD_TASK_SUCCESS: {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload
        ],
      };
    }

    case TaskActionTypes.REMOVE_TASK_SUCCESS: {
      return {
        ...state,
        tasks: state.tasks.filter((task: Task) => task.id !== action.payload),
      };
    }

    case TaskActionTypes.UPDATE_TASK_SUCCESS: {
      return {
        ...state,
        tasks: state.tasks.map((task: Task) => task.id === action.payload.id ? action.payload : task)
      };
    }

    case TaskActionTypes.FETCH_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: action.payload,
      };
    }
  }

  return state;
};

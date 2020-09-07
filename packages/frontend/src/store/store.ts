import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import taskSagas from './task/sagas';
import { authReducer, AuthState } from './auth/reducer';
import { taskReducer, TaskState } from './task/reducer';

export type ApplicationState = {
  auth: AuthState,
  task: TaskState
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  task: taskReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(taskSagas);

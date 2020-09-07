import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import {
  AddTaskAction,
  AddTaskSuccessAction,
  FetchTasksSuccessAction,
  RemoveTaskAction,
  RemoveTaskSuccessAction,
  TaskActionTypes,
  UpdateTaskAction,
  UpdateTaskSuccessAction
} from './actions';
import { ApplicationState } from '../store';
import { addTask, fetchTasks, removeTask, updateTask } from '../../services/task-service';

export function* handleFetchTasks() {
  try {
    const getUserId = (state: ApplicationState) => state.auth.userData!.id;

    const userId = yield select(getUserId);
    const result = yield call(fetchTasks, userId);

    yield put({...new FetchTasksSuccessAction(result.data.tasks)});
  } catch (error) {
    console.log('fetchTasks error:', error.message);
  }
}

function* watchFetchTasks() {
  yield takeEvery(TaskActionTypes.FETCH_TASKS, handleFetchTasks);
}


export function* handleAddTask(action: AddTaskAction) {
  try {
    const result = yield call(addTask, action.payload);
    yield put({...new AddTaskSuccessAction(result.data.task)});
  } catch (error) {
    console.log('Add task error:', error.message);
  }
}

function* watchAddTask() {
  yield takeEvery(TaskActionTypes.ADD_TASK, handleAddTask);
}

export function* handleUpdateTask(action: UpdateTaskAction) {
  try {
    yield call(updateTask, action.payload);
    yield put({...new UpdateTaskSuccessAction(action.payload)});
  } catch (error) {
    console.log('Update task error:', error.message);
  }
}

function* watchUpdateTask() {
  yield takeEvery(TaskActionTypes.UPDATE_TASK, handleUpdateTask);
}

export function* handleRemoveTask(action: RemoveTaskAction) {
  try {
    yield call(removeTask, action.payload);
    yield put({...new RemoveTaskSuccessAction(action.payload)});
  } catch (error) {
    console.log('Remove task error:', error.message);
  }
}

function* watchRemoveTask() {
  yield takeEvery(TaskActionTypes.REMOVE_TASK, handleRemoveTask);
}

export default function* rootSaga() {
  yield all([
    watchFetchTasks(),
    watchAddTask(),
    watchUpdateTask(),
    watchRemoveTask()
  ]);
}

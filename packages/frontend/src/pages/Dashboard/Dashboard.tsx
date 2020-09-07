import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '@todo-app/common';
import { Spinner } from '../../atoms/Spinner/Spinner';
import { TaskComponent } from './Task';
import { AddTaskAction, FetchTasksAction, RemoveTaskAction, UpdateTaskAction } from '../../store/task/actions';
import { TaskForm } from './TaskForm';
import { ApplicationState } from '../../store/store';

export const Dashboard = () => {
  const userData = useSelector((state: ApplicationState) => state.auth.userData);
  const tasks = useSelector((state: ApplicationState) => state.task.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      ...new FetchTasksAction()
    });
  }, [dispatch]);

  const addTask = (task: Task) => {
    dispatch({
      ...new AddTaskAction(task)
    });
  };

  const updateTask = (task: Task) => {
    dispatch({
      ...new UpdateTaskAction(task)
    });
  };

  const removeTask = (taskId: string) => {
    dispatch({
      ...new RemoveTaskAction(taskId)
    });
  };

  if (!userData || !tasks) {
    return <Spinner/>;
  }

  return (
    <div>
      <h1>
        Welcome back {userData.email}!
      </h1>
      <p>This is the dashboard and it's only for logged-in users. You can access all your tasks and manage them</p>

      <TaskForm onSubmit={addTask} userData={userData}/>
      <div>
        {tasks.map((task) => (
          <TaskComponent
            task={task}
            onRemove={() => removeTask(task.id!)}
            onUpdate={updateTask}
          />
        ))}
      </div>
    </div>
  );
};

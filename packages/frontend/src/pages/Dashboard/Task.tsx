import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Task } from '@todo-app/common';
import { Button } from '../../atoms/Button/Button';
import { Checkbox, Input } from 'antd';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';

type TaskWrapperProps = {
  isComplete: boolean
}

const TaskWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px 10px 20px 15px;
  margin-bottom: 10px;
  background: ${(props: TaskWrapperProps) => props.isComplete ? '#cff1cf7a' : '#fff'};
`;

const TaskText = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const EditButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 6px 8px;
  margin: 0 5px;
  background: #fff;
  font-size: 20px;
  float: right;
`;

const RemoveButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 6px 8px;
  margin: 0 5px;
  background: #fff;
  font-size: 20px;
  float: right;
`;

const TextInput = styled(Input)`
  width: 80%;
`;

const IsCompleteCheckbox = styled(Checkbox)`
  margin-right: 15px;
`;

type Props = {
  task: Task
  onRemove: () => void
  onUpdate: (taskData: Task) => void
}

export const TaskComponent = ({onRemove, task, onUpdate}: Props) => {
  const [isEditable, setIsEditable] = useState(false);
  const [taskData, setTaskData] = useState(task);

  useEffect(() => {
    setTaskData(task);
  }, [task]);

  const onSave = () => {
    onUpdate(taskData);
    setIsEditable(false);
  };

  const onTextChanged = (event: any) => {
    setTaskData({
      ...taskData,
      text: event.target.value
    });
  };

  const onIsCompleteChanged = (event: any) => {
    onUpdate({
      ...task,
      isComplete: event.target.checked
    });
  };

  return (
    <TaskWrapper isComplete={task.isComplete}>
      <IsCompleteCheckbox checked={task.isComplete} onChange={onIsCompleteChanged}/>
      {isEditable ? (
        <>
          <TextInput type="text" value={taskData.text} onChange={onTextChanged}/>
          <Button onClick={onSave}>Save</Button>
        </>
      ) : (
        <>
          <TaskText>{task.text}</TaskText>
          <RemoveButton onClick={onRemove}><FaTrash/></RemoveButton>
          <EditButton onClick={() => setIsEditable(true)}><FaPencil/></EditButton>
        </>
      )}
    </TaskWrapper>
  );
};

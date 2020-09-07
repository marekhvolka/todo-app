import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { Task, User } from '@todo-app/common';
import { Button } from '../../atoms/Button/Button';

type Props = {
  userData: User
  onSubmit: (task: Task) => void
}

const Wrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
`;

const TextInput = styled(Input)`
`;

const SaveButton = styled(Button)`
`;

export const TaskForm = ({onSubmit, userData}: Props) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    onSubmit({
      userId: userData.id!,
      text,
      createdAt: Date.now(),
      isComplete: false
    });

    setText('');
  };

  return (
    <Wrapper>
      <TextInput
        onChange={(event) => setText(event.target.value)}
        value={text}
        placeholder={'New task'}
      />
      <SaveButton type="primary" onClick={handleSubmit}>Save</SaveButton>
    </Wrapper>
  );
};

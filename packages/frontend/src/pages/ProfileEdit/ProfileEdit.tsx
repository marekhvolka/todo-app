import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import { Input } from '../../atoms/Input/Input';
import { User } from '@todo-app/common';
import { Spinner } from '../../atoms/Spinner/Spinner';
import { media } from '../../theme';
import { Button } from '../../atoms/Button/Button';
import { ApplicationState } from '../../store/store';

const FormWrapper = styled.div`
  ${media.nonMobile} {
    width: 500px;
    margin: auto;
  }
`;

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, 'Email must have at least 3 characters')
    .max(255)
    .email('This is not a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(3, 'Password is not long enough')
    .max(255)
    .required('Password is required'),
});

export const ProfileEdit = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector((state: ApplicationState) => state.auth.userData);

  const onSubmit = (values: User) => {
    setIsLoading(true);
    alert('Work in progress');
    setIsLoading(false);
  };

  const onCancel = () => {
    history.goBack();
  };

  if (!userData) {
    return <Spinner/>;
  }

  return (
    <>
      {isLoading && <Spinner/>}
      <Formik validationSchema={validationSchema} initialValues={userData} onSubmit={onSubmit}>
        <Form>
          <FormWrapper>
            <h2 style={{textAlign: 'center'}}>Edit profile</h2>
            <Field label="Email" name="email" type="email" component={Input}/>
            <Field label="Password" name="password" type="password" component={Input}/>
            <Field label="Password repeat" name="passwordCheck" type="password" component={Input}/>

            <Button type="primary" htmlType="submit">Save</Button>
            <Button htmlType="button" onClick={onCancel}>Cancel</Button>
          </FormWrapper>
        </Form>
      </Formik>
    </>
  );
};

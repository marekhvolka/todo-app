import { AxiosResponse } from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { RegisterResponse } from '@todo-app/common';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { Spinner } from '../../atoms/Spinner/Spinner';
import { media } from '../../theme';
import { FormikHelpers } from 'formik/dist/types';
import { register } from '../../services/auth-service';

const RegisterWrapper = styled.div`
  ${media.nonMobile} {
    width: 500px;
    margin: auto;
  }
`;

const LoginSection = styled.div`
  text-align: center;
  margin-top: 20px;
`;

type RegisterModel = {
  email: string
  password: string
  passwordCheck: string
}

const initialValues: RegisterModel = {
  email: '',
  password: '',
  passwordCheck: ''
};

const validate = (values: RegisterModel) => {
  const errors: any = {};
  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  if (!values.passwordCheck) {
    errors.passwordCheck = 'Please type password again';
  }

  if (values.password !== values.passwordCheck) {
    errors.passwordCheck = 'Passwords should match';
  }

  return errors;
};

export const Register: React.FunctionComponent = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: RegisterModel, {setErrors}: FormikHelpers<RegisterModel>) => {
    setIsLoading(true);
    delete values.passwordCheck;

    try {
      const response: AxiosResponse<RegisterResponse> = await register(values);
      setIsLoading(false);

      if (response.data.error) {
        setErrors({
          passwordCheck: response.data.error.message
        });
      } else {
        history.push('/login');
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <RegisterWrapper>
      {isLoading && <Spinner/>}
      <h1>Create Account</h1>
      <Formik
        validate={validate}
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <Field
              name="email"
              label="Email"
              type="email"
              component={Input}
            />
            <Field
              type="password"
              name="password"
              label="Password"
              component={Input}
            />
            <Field
              type="password"
              name="passwordCheck"
              label="Confirm password"
              component={Input}
            />
            <Button center htmlType="submit">Register</Button>
            <LoginSection>
              Already registered? Let&apos;s <Link to={'/login'}>Sign In</Link>
            </LoginSection>
          </Form>
        )}
      </Formik>
    </RegisterWrapper>
  );
};

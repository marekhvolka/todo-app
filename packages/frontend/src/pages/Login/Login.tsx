import { Field, Form, Formik, FormikHelpers, } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Spinner } from '../../atoms/Spinner/Spinner';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { media } from '../../theme';
import { LoginRequest } from '@todo-app/common';
import { LoadUserAction } from '../../store/auth/actions';
import { login } from '../../services/auth-service';

const LoginWrapper = styled.div`
  ${media.nonMobile} {
    width: 500px;
    margin: auto;
  }
`;

const Headline = styled.h2`
  text-align: center;
`;

const RegisterSection = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const Login: React.FunctionComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = async (values: LoginRequest, {setErrors}: FormikHelpers<LoginRequest>) => {
    setIsLoading(true);

    try {
      const {data} = await login(values);
      setIsLoading(false);

      if (data.error) {
        return setErrors({
          password: data.error.message,
        });
      }

      dispatch({
        ...new LoadUserAction(data.user!),
      });

      history.push('/dashboard');
    } catch (error) {
      setIsLoading(false);
      setErrors({
        password: error.message,
      });
    }
  };

  return (
    <>
      {isLoading && <Spinner/>}
      <Formik initialValues={{email: '', password: ''}} onSubmit={onLogin}>
        <Form>
          <LoginWrapper>
            <Headline>Log In</Headline>
            <Field label="Email" name="email" type="email" component={Input}/>
            <Field type="password" label="Password" name="password" component={Input}/>
            <Button center htmlType="submit">
              Log in
            </Button>
            <RegisterSection>
              Don&apos;t have an account? <Link to="/register">Create an account</Link>
            </RegisterSection>
          </LoginWrapper>
        </Form>
      </Formik>
    </>
  );
};

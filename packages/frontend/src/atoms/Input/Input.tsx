import styled from 'styled-components';
import { Form, Input as BaseInput } from 'antd';
import { FieldProps } from 'formik';
import React from 'react';

type Props = FieldProps & {
  type?: string;
  label?: string;
  placeholder?: string;
};

const ErrorMessage = styled.p`
  color: red;
  line-height: 20px;
`;

export const Input = React.memo(({field, form: {touched, errors}, ...props}: Props) => (
  <Form.Item label={props.label} validateStatus={touched[field.name] && errors[field.name] ? 'error' : ''}>
    <BaseInput {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <ErrorMessage>{errors[field.name]}</ErrorMessage>
    )}
  </Form.Item>
));

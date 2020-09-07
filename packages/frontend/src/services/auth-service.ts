import { config } from '../config';
import axios, { AxiosResponse } from 'axios';
import { LoginRequest, LoginResponse, RegisterRequest } from '@todo-app/common';

export const login = async (values: LoginRequest) => {
  const {data}: AxiosResponse<LoginResponse> = await axios.post(config.backendUrl + '/login', values);

  if (data.user) {
    localStorage.setItem('user', JSON.stringify(data.user));
  }

  return data;
};

export const logout = () => {
  localStorage.removeItem('user');
}

export const register = (values: RegisterRequest) => {
  return axios.post(config.backendUrl + '/register', values);
};

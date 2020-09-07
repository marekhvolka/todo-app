import { config } from '../config';
import axios, { AxiosResponse } from 'axios';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '@todo-app/common';

export const login = async (values: LoginRequest):Promise<AxiosResponse<LoginResponse>>  => {
  const result: AxiosResponse<LoginResponse> = await axios.post(config.backendUrl + '/login', values);

  if (result.data.user) {
    localStorage.setItem('user', JSON.stringify(result.data.user));
  }

  return result;
};

export const logout = (): void => {
  localStorage.removeItem('user');
};

export const register = (values: RegisterRequest): Promise<AxiosResponse<RegisterResponse>> => {
  return axios.post(config.backendUrl + '/register', values);
};

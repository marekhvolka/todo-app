import { AuthAction, AuthActionTypes } from './actions';
import { User } from '@todo-app/common';

export type AuthState = {
  userData: User | undefined;
};

const userData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : undefined;

export const defaultState: AuthState = {
  userData
};

export const authReducer = (state: AuthState = defaultState, action: AuthAction): AuthState => {
  switch (action.type) {
  case AuthActionTypes.LOAD_USER: {
    return {
      ...state,
      userData: action.payload,
    };
  }

  case AuthActionTypes.LOGOUT: {
    return {
      ...state,
      userData: undefined,
    };
  }
  }

  return state;
};

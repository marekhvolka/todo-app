import { User } from '@todo-app/common';

export enum AuthActionTypes {
  LOAD_USER = 'LOAD_USER',
  LOGOUT = 'LOGOUT',
}

export class LoadUserAction {
  type: typeof AuthActionTypes.LOAD_USER = AuthActionTypes.LOAD_USER;

  payload: User;

  constructor(userData: User) {
    this.payload = userData;
  }
}

export class LogoutUserAction {
  type: typeof AuthActionTypes.LOGOUT = AuthActionTypes.LOGOUT;
}

export type AuthAction =
  LoadUserAction |
  LogoutUserAction;

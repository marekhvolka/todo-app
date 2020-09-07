import { User } from './User';
import { ResponseError } from './ResponseError';

export type LoginResponse = {
  error?: ResponseError
  user?: User
}

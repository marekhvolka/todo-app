import { User } from '@todo-app/common';

export const authHeader = () => {
  const user: User = JSON.parse(localStorage.getItem('user') as string);

  if (user && user.token) {
    return {'x-access-token': user.token};
  } else {
    return {};
  }
};

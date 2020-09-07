import { Dropdown, Icon, Menu } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { LogoutUserAction } from '../../store/auth/actions';
import { ApplicationState } from '../../store/store';
import { logout } from '../../services/auth-service';

export const NavbarUserSection = () => {
  const history = useHistory();
  const userData = useSelector((state: ApplicationState) => state.auth.userData);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch({...new LogoutUserAction()});
    logout();
    history.push('/');
  };

  const onProfile = () => {
    history.push('/profile');
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={onProfile}>Profile</Menu.Item>
      <Menu.Divider/>
      <Menu.Item onClick={onLogout}>Log out</Menu.Item>
    </Menu>
  );

  return (
    <span>
      {userData ? (
        <Dropdown.Button overlay={menu} placement="bottomLeft" icon={<Icon type="user"/>}>
          <span>{userData.email}</span>
        </Dropdown.Button>
      ) : (
        <>
          <Link className="link" to="/register">
            Register
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
        </>
      )}
    </span>
  );
};

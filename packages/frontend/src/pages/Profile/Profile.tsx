import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ApplicationState } from '../../store/store';
import { Spinner } from '../../atoms/Spinner/Spinner';
import { Button } from '../../atoms/Button/Button';

const Table = styled.table`
  td {
    padding: 10px 20px 10px 0;
    font-size: 20px;
  }
`;

export const Profile: React.FunctionComponent = () => {
  const userData = useSelector((state: ApplicationState) => state.auth.userData);

  if (!userData) {
    return <Spinner/>;
  }

  return (
    <div>
      <h1>Profile</h1>

      <Table>
        <tbody>
          <tr key="email">
            <td>Email:</td>
            <td>{userData.email}</td>
          </tr>
        </tbody>
      </Table>

      <Button type="primary">
        <Link to="/profile-edit">Edit profile</Link>
      </Button>
      <Button>
        <Link to="/">Cancel</Link>
      </Button>
    </div>
  );
};

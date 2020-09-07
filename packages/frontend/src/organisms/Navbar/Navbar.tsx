import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Container } from '../../atoms/Container/Container';
import { NavbarUserSection } from '../NavbarUserSection/NavbarUserSection';
import { ApplicationState } from '../../store/store';

const NavbarContainer = styled.div`
  height: 50px;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  padding: 12px 0;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.border.color};
  margin-bottom: 1.5rem !important;

  @include mobile {
    height: 30px;
    padding: 5px 0;
  }

  .link {
    padding: 0 10px;
  }
`;

const RightSection = styled.div`
  float: right;
`;

export const Navbar = () => {
  const userData = useSelector((state: ApplicationState) => state.auth.userData);

  return (
    <NavbarContainer>
      <Container withoutPadding>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/">
          Link to some content
        </Link>
        {userData && (
          <>
            <Link className="link" to="/dashboard">
              Dashboard
            </Link>
          </>
        )}
        <RightSection>
          <NavbarUserSection/>
        </RightSection>
      </Container>
    </NavbarContainer>
  );
};

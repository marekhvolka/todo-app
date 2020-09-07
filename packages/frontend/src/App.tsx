import 'antd/dist/antd.css';
import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { normalize } from 'styled-normalize';
import { Register } from './pages/Register/Register';
import { theme } from './theme';
import { ProtectedRoute } from './atoms/ProtectedRoute/ProtectedRoute';
import { Login } from './pages/Login/Login';
import { Profile } from './pages/Profile/Profile';
import { Container } from './atoms/Container/Container';
import { Navbar } from './organisms/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { store } from './store/store';
import { ProfileEdit } from './pages/ProfileEdit/ProfileEdit';
import { FlashMessage } from './atoms/FlashMessage/FlashMessage';
import { Dashboard } from './pages/Dashboard/Dashboard';

export const GlobalStyle = createGlobalStyle`
 ${normalize}
 a {
  color: #000
 }
`;

const Wrapper = styled.div`
  padding-bottom: 70px;
`;

export const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle/>
      <FlashMessage/>
      <BrowserRouter>
        <div>
          <Navbar/>
          <Wrapper>
            <Container>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>

                <ProtectedRoute path="/dashboard" exact component={Dashboard}/>
                <ProtectedRoute path="/profile" exact component={Profile}/>
                <ProtectedRoute path="/profile-edit" exact component={ProfileEdit}/>
              </Switch>
            </Container>
          </Wrapper>
        </div>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

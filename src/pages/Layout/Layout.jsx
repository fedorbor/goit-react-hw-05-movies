import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, Nav, NavList, NavItem, StyledLink } from './Layout.styles';

const Layout = () => {
  return (
    <Container>
      <Nav>
        <NavList>
          <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
          <NavItem><StyledLink to="/movies">Movies</StyledLink></NavItem>
        </NavList>
      </Nav>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;

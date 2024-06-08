import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Nav = styled.nav`
  background-color: #282c34;
  padding: 10px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MovieItem = styled.li`
  margin: 10px 0;
`;

export const StyledLink = styled(Link)`
  color: #282c34;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

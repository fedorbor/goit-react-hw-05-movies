import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  padding: 20px;
`;

export const MovieTitle = styled.h1`
  margin: 20px 0;
`;

export const AdditionalInfo = styled.div`
  margin-top: 20px;
`;

export const StyledLink = styled(Link)`
  color: #282c34;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
`;

export const Overview = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

export const Poster = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 20px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export const InfoLink = styled(Link)`
  text-decoration: none;
  color: blue;
  &:hover {
    text-decoration: underline;
  }
`;

import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { Container, MovieTitle, AdditionalInfo, StyledLink } from './MovieDetails.styles';
import { fetchMovieDetails } from '../../services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(err => setError(err.message));
  }, [movieId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <MovieTitle>{movie.title}</MovieTitle>
      <p>{movie.overview}</p>
      <AdditionalInfo>
        <h2>Additional Information</h2>
        <StyledLink to="cast">Cast</StyledLink>
        <br />
        <StyledLink to="reviews">Reviews</StyledLink>
      </AdditionalInfo>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;

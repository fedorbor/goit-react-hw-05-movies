import React, { useState, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import { Container, Title, Overview, Poster, AdditionalInfo, InfoLink } from './MovieDetails.styles';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Title>{movie.title}</Title>
      <Overview>{movie.overview}</Overview>
      {movie.poster_path && (
        <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} />
      )}
      <AdditionalInfo>
        <InfoLink as={Link} to={`cast`}>Cast</InfoLink>
        <InfoLink as={Link} to={`reviews`}>Reviews</InfoLink>
      </AdditionalInfo>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;

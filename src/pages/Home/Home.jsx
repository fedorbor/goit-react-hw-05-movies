import React, { useEffect, useState } from 'react';
import { MovieList, MovieItem, StyledLink } from './Home.styles';
import { fetchTrendingMovies } from '../../services/api';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTrendingMovies()
            .then(setMovies)
            .catch(err => setError(err.message));
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movies || movies.length === 0) {
        return <div>No movies found.</div>;
    }

    return (
        <div>
            <h1>Trending Movies</h1>
            <MovieList>
                {movies.map(movie => (
                    <MovieItem key={movie.id}>
                        <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
                    </MovieItem>
                ))}
            </MovieList>
        </div>
    );
};

export default Home;
 
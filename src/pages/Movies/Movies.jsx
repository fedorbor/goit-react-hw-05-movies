import React, { useState } from 'react';
import { fetchMoviesByQuery } from '../../services/api';
import { Link } from 'react-router-dom';

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = () => {
        fetchMoviesByQuery(query).then(setMovies);
    };

    return (
        <div>
            <h1>Search Movies</h1>
            <input 
                type="text" 
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;

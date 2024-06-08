const API_KEY = 'd0f69c70bacdba69b4b8a9861900db98';  
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrendingMovies = async () => {
    const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
};

const fetchMoviesByQuery = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
};

const fetchMovieDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
};

const fetchMovieCredits = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
};

const fetchMovieReviews = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
};

export { fetchTrendingMovies, fetchMoviesByQuery, fetchMovieDetails, fetchMovieCredits, fetchMovieReviews };

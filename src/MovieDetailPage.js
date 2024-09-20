import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const apiKey = '7ee736783963d935b4a872882160ab21';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {movie && (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-65 object-cover"
          />
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <p className="text-base text-gray-700 mb-4">{movie.overview}</p>
            <p className="text-sm text-gray-600">Release Date: {movie.release_date}</p>
            <p className="text-sm text-gray-600">Rating: {movie.vote_average}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;

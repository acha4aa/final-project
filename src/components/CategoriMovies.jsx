import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = 'b86de826f395db3752ee75980abfa448'; // Replace with your actual TMDB API key

const CategoriMovies = () => {
  const { id } = useParams(); // Get the genre ID from the URL
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMoviesByCategory = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching category movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByCategory();
  }, [id]);

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-4xl text-white font-extrabold text-center mb-8">Movies in Genre</h1>
      
      {loading ? (
        <p className="text-white text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <img 
                src={movie.poster_path ? 
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 
                  'https://via.placeholder.com/500x750?text=No+Image'} 
                alt={movie.title} 
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg text-white font-semibold mb-2">{movie.title}</h2>
                <p className="text-gray-400 text-sm">
                  {/* {movie.overview.length > 100 ? movie.overview.slice(0, 100)... : movie.overview} */}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriMovies;
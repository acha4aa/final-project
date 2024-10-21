import { useEffect, useState } from 'react';
import axios from 'axios';
import KategoriView from './KategoriView';

const API_KEY = 'b86de826f395db3752ee75980abfa448'; // Replace with your API key

const Kategori = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres(); // Fetch genres when the component is mounted
  }, []);

  return (
    <div className="p-8 bg-gray-900 min-h-screen flex flex-col items-center">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-lg text-white">Loading genres...</p>
        </div>
      ) : (
        <div className="w-full max-w-6xl">
          <KategoriView genres={genres} />
        </div>
      )}
    </div>
  );
};

export default Kategori;
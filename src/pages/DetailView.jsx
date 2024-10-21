// src/components/DetailView.js
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [useRating, setUserRating] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const getMovie = async () => {
    try {
      const dataHeader = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODZkZTgyNmYzOTVkYjM3NTJlZTc1OTgwYWJmYTQ0OCIsIm5iZiI6MTcyOTUwODY1Ni4xNjQzMzcsInN1YiI6IjY3MDQ4MzNhMWI5NmI4ZWY0YzY5YjYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i_BF-KfqWlxJjKw39FuhZGJbqYaj4EqnolPiftwbZnI",
        },
      };
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}`,
        dataHeader
      );

      const data = await response.json();
      console.log(data);
      setMovie(data);

      const favorite = JSON.parse(localStorage.getItem("favorites")) || [];
      const isFavorite = favorite.some((favorite) => favorite.id === data.id);
      setIsFavorite(isFavorite);
    } catch (error) {
      console.error("error fetching film data:", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="container mx-auto my-10 bg-slate-50 dark:bg-stone-900 p-5 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-cover rounded-lg"
      />
      <p className="mt-4">{movie.overview}</p>
      <button onClick={() => navigate(-1)} className="btn btn-primary mt-4">
        Back to List
      </button>
    </div>
  );
};

export default DetailView;

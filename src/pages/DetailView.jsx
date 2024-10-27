// src/components/DetailView.js
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const [favoriteList, setFavoriteList] = useState([]);
  const [ratedList, setRatedList] = useState([]);

  const dataHeader = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODZkZTgyNmYzOTVkYjM3NTJlZTc1OTgwYWJmYTQ0OCIsIm5iZiI6MTcyOTUwODY1Ni4xNjQzMzcsInN1YiI6IjY3MDQ4MzNhMWI5NmI4ZWY0YzY5YjYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i_BF-KfqWlxJjKw39FuhZGJbqYaj4EqnolPiftwbZnI",
    },
  };
  const navigate = useNavigate();

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}`,
        dataHeader
      );

      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error("error fetching film data:", error);
    }
  };

  const getFavorites = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/account/null/favorite/movies`,
        dataHeader
      );

      setFavoriteList(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getRated = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/account/null/rated/movies`,
        dataHeader
      );

      setRatedList(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const postFav = async (boolean) => {
    try {
      const body = {
        media_type: "movie",
        media_id: id,
        favorite: boolean,
      };
      const res = await axios.post(
        `https://api.themoviedb.org/3/account/null/favorite`,
        body,
        dataHeader
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const postRating = async (value) => {
    try {
      const body = { value: value };
      const res = await axios.post(
        `https://api.themoviedb.org/3/movie/${id}/rating`,
        body,
        dataHeader
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const filterById = (array) => {
    const data = array.filter((item) => {
      return item.id == id;
    });

    return data[0];
  };

  const handleStar = (star) => {
    setUserRating(star);
    postRating(star);
    console.log(star);
  };

  const handleFavorite = (boolean) => {
    setIsFavorite(boolean);
    postFav(boolean);
    console.log(boolean);
  };

  useEffect(() => {
    if (!ratedList || !favoriteList) {
      return;
    }
    const rating = filterById(ratedList);
    const favorite = filterById(favoriteList);
    if (rating) {
      setUserRating(rating.rating);
    }
    if (favorite) {
      setIsFavorite(true);
      console.log(true);
      return;
    }
    if (!favorite) {
      setIsFavorite(false);
      console.log(false);
    }
  }, [ratedList, favoriteList]);

  useEffect(() => {
    getMovie();
    getFavorites();
    getRated();
  }, []);

  return (
    <div className="container flex justify-center items-center mx-auto my-10 bg-slate-50 dark:bg-stone-900 p-5 rounded-lg shadow">
      <div className="flex flex-col items-center mx-4">
        <h1 className="text-3xl font-bold mb-4">{movie?.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt={movie?.title}
          className="w-80 h-full object-cover rounded-lg"
        />
        <p className="mt-4">{movie?.overview}</p>
        <div className="flex items-center gap-x-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
            <svg
              key={star}
              onClick={() => handleStar(star)}
              className={`w-5 h-5 ${
                star <= userRating ? "fill-amber-400" : "fill-gray-400"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" />
            </svg>
          ))}
        </div>
        {isFavorite ? (
          <button
            onClick={() => handleFavorite(false)}
            className="btn btn-primary text-white mt-4"
          >
            Remove from favorites
          </button>
        ) : (
          <button
            onClick={() => handleFavorite(true)}
            className="btn btn-error text-white mt-4"
          >
            Add to favorites
          </button>
        )}

        <button
          onClick={() => navigate(-1)}
          className="btn text-white btn-primary mt-4"
        >
          Back to List
        </button>
      </div>
    </div>
  );
};

export default DetailView;

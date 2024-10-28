import { useEffect, useState } from "react";
import FavoriteView from "./FavoriteView";
import axios from "axios";

export default function Favorite() {
  const [data, setData] = useState([]);
  const dataHeader = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODZkZTgyNmYzOTVkYjM3NTJlZTc1OTgwYWJmYTQ0OCIsIm5iZiI6MTcyOTUwODY1Ni4xNjQzMzcsInN1YiI6IjY3MDQ4MzNhMWI5NmI4ZWY0YzY5YjYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i_BF-KfqWlxJjKw39FuhZGJbqYaj4EqnolPiftwbZnI",
    },
  };

  const getFavorites = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/account/null/favorite/movies`,
        dataHeader
      );

      setData(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return <FavoriteView data={data} />;
}

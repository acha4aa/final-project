import { useEffect, useState } from "react";
import RatingView from "./RatingView";
import axios from "axios";

export default function Rating() {
  const [data, setData] = useState([]);
  const dataHeader = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODZkZTgyNmYzOTVkYjM3NTJlZTc1OTgwYWJmYTQ0OCIsIm5iZiI6MTcyOTUwODY1Ni4xNjQzMzcsInN1YiI6IjY3MDQ4MzNhMWI5NmI4ZWY0YzY5YjYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i_BF-KfqWlxJjKw39FuhZGJbqYaj4EqnolPiftwbZnI",
    },
  };

  const getRated = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/account/null/rated/movies`,
        dataHeader
      );

      setData(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getRated();
  }, []);

  return <RatingView data={data} />;
}

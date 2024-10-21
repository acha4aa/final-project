import axios from "axios";
import { useEffect, useState } from "react";
import HomePagesView from "./HomePageView";

export default function HomePages() {
  const [data, setData] = useState();
  const [popular, setPopular] = useState();

  useEffect(() => {
    ambilTrending();
    ambilPopular();
  }, []);

  useEffect(() => {
    console.log(data);
    console.log(popular);
  }, [data, popular]);

  const ambilPopular = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODZkZTgyNmYzOTVkYjM3NTJlZTc1OTgwYWJmYTQ0OCIsIm5iZiI6MTcyODUzMDUyNi45MjMwMTQsInN1YiI6IjY3MDQ4MzNhMWI5NmI4ZWY0YzY5YjYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b_BsTWV_BIDOKsJDM-b9vmDIwMFK7sVeW36Sx5dcx4U",
        },
      }
    );
    const popular = await response.data;
    setPopular(popular);
  };

  const ambilTrending = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODZkZTgyNmYzOTVkYjM3NTJlZTc1OTgwYWJmYTQ0OCIsIm5iZiI6MTcyODUzMDUyNi45MjMwMTQsInN1YiI6IjY3MDQ4MzNhMWI5NmI4ZWY0YzY5YjYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b_BsTWV_BIDOKsJDM-b9vmDIwMFK7sVeW36Sx5dcx4U",
        },
      }
    );
    const data = await response.data;
    setData(data);
  };

  return <HomePagesView data={data} popular={popular} />;
}

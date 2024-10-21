import Detail from "../DetailView";

const HomePagesView = ({ data, popular }) => {
  try {
    return (
      <div className="bg-slate-50 dark:bg-stone-900">
        <HeroSection />
        <CardCarousel heading={"All Trending"} data={data} />
        <CardCarousel heading={"Popular"} data={popular} />
      </div>
    );
  } catch (error) {
    console.error(error);
  }
};

const HeroSection = () => (
  <div
    className="hero min-h-screen bg-slate-50 dark:bg-stone-900 rounded-box shadow"
    style={{
      backgroundImage:
        "url(https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg)",
    }}
  >
    <div className="hero-overlay bg-opacity-65"></div>
    <div className="hero-content text-neutral-content text-left">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
);

const CardCarousel = ({ data, heading }) => (
  <div className="container bg-slate-50 dark:bg-stone-900 mx-auto my-10 mt-45">
    <section>
      <div className="text-center dark:text-white text-4xl font-bold mb-9">
        <h1>{heading}</h1>
      </div>
    </section>
    <div className="carousel w-full rounded-box">
      {data?.results?.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  </div>
);

import { Link } from 'react-router-dom'; // Tambahkan ini di bagian atas file

const Card = ({ item }) => (
  <div className="px-4">
    <Link to={`/details/${item.id}`}>
      <div className="dark:bg-stone-900 dark:text-white carousel-item h-[500px] w-[200px] bg-base-100 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-4 flex flex-col flex-grow justify-between">
          <div className="mb-4">
            <h3 className="text-lg line-clamp-1 font-semibold mb-2 text-center">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm text-center truncate">
              {item.overview}
            </p>
          </div>
          <button className="btn btn-primary mt-4 w-full">View Details</button>
        </div>
      </div>
    </Link>
  </div>
);

export default HomePagesView;

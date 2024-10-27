import { Link } from "react-router-dom";

export default function FavoriteView({ data }) {
  try {
    return (
      <div className="flex py-12 min-h-screen justify-center">
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl pb-8 text-center">Favorite List</h2>
          <div className="grid grid-cols-4 gap-4">
            {data.map((item, index) => {
              return (
                <Link key={index} to={`/details/${item.id}`}>
                  <div className="dark:bg-stone-900 dark:text-white carousel-item h-[500px] w-[200px] bg-base-100 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
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
                      <button className="btn btn-primary mt-4 w-full">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

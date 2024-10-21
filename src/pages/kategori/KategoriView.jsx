import { Link } from "react-router-dom";

export default function KategoriView({ genres }) {
  try {
    return (
      <div className="p-6 bg-gray-900 min-h-screen">
        <h1 className="text-4xl text-white font-extrabold text-center mb-8">
          Movie Categories
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {genres.map((genre) => (
            <Link to={`/kategori/${genre.id}`} key={genre.id}>
              <button className="bg-gray-800 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105 duration-300">
                {genre.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

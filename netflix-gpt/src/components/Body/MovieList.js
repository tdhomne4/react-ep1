import React, { useRef } from "react";
import { TMDB_IMAGE_PATH } from "../../utils/constants";

const MovieList = ({ title, movies }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative w-full py-5">
        <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
        <div className="relative group">
          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-scroll scrollbar-hide space-x-4"
          >
            {movies?.map((movie) => (
              <div
                key={movie.id}
                className="min-w-[200px] flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={TMDB_IMAGE_PATH + movie.poster_path}
                  alt={movie.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-2">
                  <h3 className="text-lg text-white font-bold truncate">
                    {movie.title}
                  </h3>
                  <p className="text-xs text-gray-400">{movie.release_date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-50 bg-opacity-50 p-2 rounded-full text-white hidden group-hover:block"
          >
            &lt;
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2  bg-slate-50 bg-opacity-50 p-2 rounded-full text-white hidden group-hover:block"
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieList;

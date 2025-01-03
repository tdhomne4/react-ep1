import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetchMovieVideo from "../../hooks/useFetchMovieVideo";

const MainVideoContainer = () => {
  const [movies, setMovies] = useState(null);

  const getMovies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Handle the case where `movies` is null or empty
  const mainMovie = movies ? movies[0] : null;

  // / Deconstructing properties of the first movie (if exists)
  const { original_title, overview, id } = mainMovie || {};

  // Fetch the video URL using the custom hook
  const movieVideoUrl = useFetchMovieVideo(id);

  useEffect(() => {
    if (getMovies) {
      setMovies(getMovies); // Set the movies from Redux store
    }
  }, [getMovies]); // Adding `getMovies` to the dependency array

  // Handling cases where `movies` is still null or empty
  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
        {mainMovie && (
          <>
            {/* Background Video */}
            <iframe
              src={movieVideoUrl}
              className="absolute top-0 left-0 w-full h-full object-cover"
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-start h-full text-white px-8 md:px-16 space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                {original_title}
              </h1>
              <p className="max-w-lg text-sm md:text-lg">{overview}</p>
              <div className="flex space-x-4">
                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium text-sm md:text-base">
                  Play
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-md font-medium text-sm md:text-base">
                  More Info
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MainVideoContainer;

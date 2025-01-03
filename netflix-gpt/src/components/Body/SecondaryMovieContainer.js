import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryMovieContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="p-5 -mt-10 bg-black">
      {movies?.nowPlayingMovies && (
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
      )}
      {movies?.popularMovies && (
        <MovieList title={"Popular"} movies={movies.popularMovies} />
      )}

      {movies?.topRatedMovies && (
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      )}
    </div>
  );
};

export default SecondaryMovieContainer;

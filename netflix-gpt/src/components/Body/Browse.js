import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies.js";
import useTopRatedMovies from "../../hooks/useTopRatedMovies.js";
import { Header } from "../Layout/Header";
import MainVideoContainer from "./MainVideoContainer.js";
import SecondaryMovieContainer from "./SecondaryMovieContainer.js";

export const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {/**
       * Main Video Container (Video background & title)
       * Recommended movie container (Movie Cards)
       */}
      <MainVideoContainer />
      <SecondaryMovieContainer />
    </div>
  );
};

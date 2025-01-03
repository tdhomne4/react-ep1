import { useDispatch } from "react-redux";

import { addNowPlayingMovies } from "../utils/movieSlice";

import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = async () => {
  const dispatch = useDispatch();

  //Fetch data from TMDB API and update the store
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  } catch (error) {
    console.log(error);
  }
};

export default useNowPlayingMovies;

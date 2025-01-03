import { useDispatch } from "react-redux";

import { addPopularMovies } from "../utils/movieSlice";

import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = async () => {
  const dispatch = useDispatch();

  //Fetch data from TMDB API and update the store
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  } catch (error) {
    console.log(error);
  }
};

export default usePopularMovies;

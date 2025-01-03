import { useDispatch } from "react-redux";

import { addTopRatedMovies } from "../utils/movieSlice";

import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = async () => {
  const dispatch = useDispatch();

  //Fetch data from TMDB API and update the store
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  } catch (error) {
    console.log(error);
  }
};

export default useTopRatedMovies;

import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchMovieVideo = (id) => {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const fetchMovieVideo = async () => {
      if (!id) return; // Skip if `id` is not provided

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          API_OPTIONS
        );
        const data = await response.json();

        // Filter the results for trailers
        const filterData = data.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : data.results[0]; // Fallback to first result

        if (trailer) {
          const videoUrl = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`;
          setVideoUrl(videoUrl); // Update the state with the video URL
        }
      } catch (error) {
        console.error("Error fetching movie video:", error);
      }
    };

    fetchMovieVideo();
  }, [id]); // Runs whenever `id` changes

  return videoUrl;
};

export default useFetchMovieVideo;

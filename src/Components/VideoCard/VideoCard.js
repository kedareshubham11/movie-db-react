import React, { forwardRef } from "react";
import StarIcon from "@material-ui/icons/Star";
import "./VideoCard.css";
import { useHistory } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie, setDetails }, ref) => {
  const history = useHistory();

  const setMovieDetails = () => {
    setDetails(movie);
    history.push(`/movie-details:${movie.id}`);
  };

  return (
    <div ref={ref} className="videoCard" onClick={setMovieDetails}>
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="banner"
        loading="lazy"
      />
      <h2>{movie.title || movie.name}</h2>
      <span className="videoCard__status">
        <p>{movie.release_date || movie.first_air_date}</p>
        <span>
          <StarIcon style={{ color: "yellow" }} />
          <p>{movie.vote_average}</p>
        </span>
      </span>
    </div>
  );
});

export default VideoCard;

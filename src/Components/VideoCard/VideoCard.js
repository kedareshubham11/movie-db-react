import { ThumbUpSharp } from "@material-ui/icons";
import React from "react";
import TextTruncate from "react-text-truncate";
import "./VideoCard.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="banner"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title}</h2>
      <span className="videoCard__status">
        {movie.media_type && `${movie.media_type}`}
        <p>Release_date: {movie.release_date || movie.first_air_date}</p>
        <ThumbUpSharp />
        {movie.vote_count}
      </span>
    </div>
  );
}

export default VideoCard;

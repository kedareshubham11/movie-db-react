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
      ></img>
      <h2>{movie.title}</h2>
      <p>Release_date: {movie.release_date}</p>
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
    </div>
  );
}

export default VideoCard;

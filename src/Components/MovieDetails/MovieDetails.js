import React from "react";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Rating from "@material-ui/lab/Rating";
import "./MovieDetails.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
const base_url = "https://image.tmdb.org/t/p/original/";

function MovieDetails({ details }) {
  return (
    <div
      className="movieDetails"
      /*style={{ backgroundImage: `url(${base_url}${details?.backdrop_path})` }}
       */
    >
      <div className="MD_left">
        <img
          src={`${base_url}${details.poster_path}`}
          alt="poster"
          class="poster"
        />
      </div>
      <div className="MD_right">
        <h2>{details.title || details.name}</h2>
        <span className="sub">
          <p className="type">{details.media_type || "Movie"}</p>
          <p className="language">Language: {details.original_language}</p>
        </span>
        <div className="rating_icons">
          <span className="progress">
            <Box position="relative" display="inline-flex">
              <CircularProgress
                variant="determinate"
                value={details.vote_average * 10}
              />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  style={{ fontSize: 12 }}
                  component="p"
                  color="#FFFF"
                >
                  {details.vote_average * 10}%
                </Typography>
              </Box>
            </Box>
          </span>
          <FavoriteIcon style={{ fontSize: 42, color: "#FFFF" }} />
          <span className="ratings">
            <p>Ratings</p>
            <Rating
              name="read-only"
              value={details.vote_average / 2}
              readOnly
            />
          </span>

          <span className="play__trailer">
            <PlayArrowIcon />
            <p>Play Trailer</p>
          </span>
        </div>
        <h3>Overview</h3>
        <p>{details.overview}</p>
        <div className="footer">
          <div className="realease">
            <h4>Release Date</h4>
            <p>{details.release_date}</p>
          </div>
          <div className="popularity">
            <h4>Popularity</h4>
            <p>{details.popularity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

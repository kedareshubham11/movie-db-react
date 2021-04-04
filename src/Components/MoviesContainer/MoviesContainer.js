import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoCard from "../VideoCard/VideoCard";
import "./MoviesContainer.css";
import axios from "../../Services/API/axios";
import FlipMove from "react-flip-move";
import MovieDetails from "../MovieDetails/MovieDetails";

function MoviesContainer({ selectedOption, setDetails }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="moviesContainer">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} setDetails={setDetails} />
        ))}
      </FlipMove>
    </div>
  );
}

export default MoviesContainer;

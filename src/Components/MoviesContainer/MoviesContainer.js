import React, { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./MoviesContainer.css";
import axios from "../../Services/API/axios";
import requests from "../../Services/API/tmdb-api";

function MoviesContainer() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchAnimatino);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, []);

  return (
    <div className="moviesContainer">
      {movies.map((movie) => (
        <VideoCard movie={movie} />
      ))}
    </div>
  );
}

export default MoviesContainer;

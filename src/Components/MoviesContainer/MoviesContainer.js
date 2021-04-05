import React, { useEffect } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./MoviesContainer.css";
import axios from "../../Services/API/axios";
import FlipMove from "react-flip-move";
import { useHistory } from "react-router-dom";

function MoviesContainer({
  selectedOption,
  setDetails,
  movies,
  setMovies,
  search,
}) {
  const history = useHistory();

  if (search) {
    if (movies.length === 0) {
      history.push("/");
    }
  }
  useEffect(() => {
    if (!search) {
      async function fetchData() {
        const request = await axios.get(selectedOption);
        setMovies(request.data.results);
        return request;
      }

      fetchData();
    }
  }, [selectedOption, setMovies, search]);

  return (
    <div className="moviesContainer">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} setDetails={setDetails} />
        ))}
      </FlipMove>

      {search}
    </div>
  );
}

export default MoviesContainer;

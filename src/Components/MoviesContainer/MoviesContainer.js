import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import VideoCard from "../VideoCard/VideoCard";
import "./MoviesContainer.css";
import axios from "../../Services/API/axios";
import FlipMove from "react-flip-move";
import MovieDetails from "../MovieDetails/MovieDetails";

function MoviesContainer({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState(null);

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
      <Router>
        <Switch>
          <Route path="/movie-details:id">
            <MovieDetails details={details} />
          </Route>

          <Route path="/">
            <FlipMove>
              {movies.map((movie) => (
                <VideoCard
                  key={movie.id}
                  movie={movie}
                  setDetails={setDetails}
                />
              ))}
            </FlipMove>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default MoviesContainer;

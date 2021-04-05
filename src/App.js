import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import MoviesContainer from "./Components/MoviesContainer/MoviesContainer";
import Navbar from "./Components/NavBar/Navbar";
import requests from "./Services/API/tmdb-api";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  const [details, setDetails] = useState(null);
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header movies={movies} setMovies={setMovies} />
        <Navbar
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
        <Switch>
          <Route path="/movie-details:id">
            <MovieDetails details={details} />
          </Route>

          <Route path="/search/:name">
            <MoviesContainer
              movies={movies}
              setMovies={setMovies}
              setDetails={setDetails}
              search={true}
            />
          </Route>

          <Route path="/">
            <MoviesContainer
              selectedOption={selectedOption}
              setDetails={setDetails}
              movies={movies}
              setMovies={setMovies}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

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

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movie-details:id">
            <Header />
            <Navbar
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
            />
            <MovieDetails details={details} />
          </Route>

          <Route path="/">
            <Header />
            <Navbar
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
            />
            <MoviesContainer
              selectedOption={selectedOption}
              setDetails={setDetails}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

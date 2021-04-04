import React from "react";
import "./Navbar.css";
import requests from "../../Services/API/tmdb-api";
import { useHistory, useLocation } from "react-router";

function Navbar({ setSelectedOption, selectedOption }) {
  const history = useHistory();
  const location = useLocation();

  const navbarClick = (item) => {
    setSelectedOption(item);
    if (location.pathname !== "/") {
      history.push("/");
    }
  };
  return (
    <div className="navbar">
      <h3
        onClick={() => navbarClick(requests.fetchTrending)}
        className={selectedOption === requests.fetchTrending ? "active" : ""}
      >
        Trending
      </h3>
      <h3
        onClick={() => navbarClick(requests.fetchTopRated)}
        className={selectedOption === requests.fetchTopRated ? "active" : ""}
      >
        Top_Rated
      </h3>
      <h3
        onClick={() => navbarClick(requests.fetchActionMovies)}
        className={
          selectedOption === requests.fetchActionMovies ? "active" : ""
        }
      >
        Action
      </h3>
      <h3
        onClick={() => navbarClick(requests.fetchComedyMovies)}
        className={
          selectedOption === requests.fetchComedyMovies ? "active" : ""
        }
      >
        Comedy
      </h3>
      <h3
        onClick={() => navbarClick(requests.fetchAnimatino)}
        className={selectedOption === requests.fetchAnimatino ? "active" : ""}
      >
        Animation
      </h3>
      <h3
        onClick={() => navbarClick(requests.fetchHorrorMovies)}
        className={
          selectedOption === requests.fetchHorrorMovies ? "active" : ""
        }
      >
        Horror
      </h3>
      <h3
        onClick={() => navbarClick(requests.fetchRomanceMovies)}
        className={
          selectedOption === requests.fetchRomanceMovies ? "active" : ""
        }
      >
        Romance
      </h3>
      <h3
        onClick={() => navbarClick(requests.fetchMystery)}
        className={selectedOption === requests.fetchMystery ? "active" : ""}
      >
        Mystery
      </h3>
      <h3
        onClick={() => navbarClick(requests.fetchSciFi)}
        className={selectedOption === requests.fetchSciFi ? "active" : ""}
      >
        Sci_Fi
      </h3>
      <h3
        onClick={() => navbarClick(requests.fetchWestern)}
        className={selectedOption === requests.fetchWestern ? "active" : ""}
      >
        Western
      </h3>
      <h3
        onClick={() => navbarClick(requests.fetchTV)}
        className={selectedOption === requests.fetchTV ? "active" : ""}
      >
        TV
      </h3>
    </div>
  );
}

export default Navbar;

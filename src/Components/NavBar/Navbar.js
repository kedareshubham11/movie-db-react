import React from "react";
import "./Navbar.css";
import requests from "../../Services/API/tmdb-api";

function Navbar({ setSelectedOption, selectedOption }) {
  return (
    <div className="navbar">
      <h3
        onClick={() => setSelectedOption(requests.fetchTrending)}
        className={selectedOption === requests.fetchTrending ? "active" : ""}
      >
        Trending
      </h3>
      <h3
        onClick={() => setSelectedOption(requests.fetchTopRated)}
        className={selectedOption === requests.fetchTopRated ? "active" : ""}
      >
        Top_Rated
      </h3>
      <h3
        onClick={() => setSelectedOption(requests.fetchActionMovies)}
        className={
          selectedOption === requests.fetchActionMovies ? "active" : ""
        }
      >
        Action
      </h3>
      <h3
        onClick={() => setSelectedOption(requests.fetchComedyMovies)}
        className={
          selectedOption === requests.fetchComedyMovies ? "active" : ""
        }
      >
        Comedy
      </h3>
      <h3
        onClick={() => setSelectedOption(requests.fetchAnimatino)}
        className={selectedOption === requests.fetchAnimatino ? "active" : ""}
      >
        Animation
      </h3>
      <h3
        onClick={() => setSelectedOption(requests.fetchHorrorMovies)}
        className={
          selectedOption === requests.fetchHorrorMovies ? "active" : ""
        }
      >
        Horror
      </h3>
      <h3
        onClick={() => setSelectedOption(requests.fetchRomanceMovies)}
        className={
          selectedOption === requests.fetchRomanceMovies ? "active" : ""
        }
      >
        Romance
      </h3>
      <h3
        onClick={() => setSelectedOption(requests.fetchMystery)}
        className={selectedOption === requests.fetchMystery ? "active" : ""}
      >
        Mystery
      </h3>
      <h3
        onClick={() => setSelectedOption(requests.fetchSciFi)}
        className={selectedOption === requests.fetchSciFi ? "active" : ""}
      >
        Sci_Fi
      </h3>
      <h3
        onClick={() => setSelectedOption(requests.fetchWestern)}
        className={selectedOption === requests.fetchWestern ? "active" : ""}
      >
        Western
      </h3>
      <h3
        onClick={() => setSelectedOption(requests.fetchTV)}
        className={selectedOption === requests.fetchTV ? "active" : ""}
      >
        TV
      </h3>
    </div>
  );
}

export default Navbar;

import React from "react";
import "./Navbar.css";
import requests from "../../Services/API/tmdb-api";

function Navbar({ setSelectedOption }) {
  return (
    <div className="navbar">
      <h3 onClick={() => setSelectedOption(requests.fetchTrending)}>
        Trending
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        Top Rated
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
        Action
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
        Comedy
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchAnimatino)}>
        Animation
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
        Horror
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
        Romance
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h3>
      <h3 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-Fi</h3>
      <h3 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h3>
      <h3 onClick={() => setSelectedOption(requests.fetchTV)}>TV</h3>
    </div>
  );
}

export default Navbar;

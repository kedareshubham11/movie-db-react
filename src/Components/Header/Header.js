import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/M-DB.png";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import axios from "../../Services/API/axios";
import request from "../../Services/API/tmdb-api";
import { useHistory } from "react-router";

function Header({ movies, setMovies }) {
  const history = useHistory();

  const [searchText, setSearchText] = useState("");

  const searchMovie = async () => {
    if (searchText !== "") {
      let api_url = `${request.search}${searchText}&page=1`;
      const result = await axios.get(api_url);
      console.log(result);
      setMovies(result.data.results);
      history.push(`/search/${searchText}`);
    }
  };

  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon2" onClick={() => history.push("/")}>
          <HomeIcon />
        </div>

        <div
          className="header__icon header__icon--active"
          onClick={() => history.push("/")}
        >
          <HomeIcon />
          <p>Home</p>
        </div>

        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>

        <div className="search__bar">
          <input
            placeholder="Search for Movies, TV Shows"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && searchMovie()}
          />
          <span onClick={searchMovie}>
            <SearchIcon />
          </span>
        </div>
      </div>
      <img src={logo} alt="logo"></img>
    </div>
  );
}

export default Header;

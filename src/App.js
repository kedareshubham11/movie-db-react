import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MoviesContainer from "./Components/MoviesContainer/MoviesContainer";
import Navbar from "./Components/NavBar/Navbar";
import requests from "./Services/API/tmdb-api";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="App">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />

      <MoviesContainer selectedOption={selectedOption} />
    </div>
  );
}

export default App;

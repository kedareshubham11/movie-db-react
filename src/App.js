import "./App.css";
import Header from "./Components/Header/Header";
import MoviesContainer from "./Components/MoviesContainer/MoviesContainer";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <MoviesContainer />
    </div>
  );
}

export default App;

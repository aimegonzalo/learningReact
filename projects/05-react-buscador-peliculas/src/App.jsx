import "./App.css";
import { Movies } from "./components/Movies";
import { useRef, useState } from "react";
import { mappedMovies } from "./functions/mappedMovies";
import { fetchMovies } from "./functions/fetchMovies";

function App() {
  const [movies, setMovies] = useState();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    fetchMovies(value, setMovies);
  };

  return (
    <>
      <div className="page">
        <header className="header">
          <h1 className="title">OMDb API Movies Finder</h1>
          <form onSubmit={handleSubmit} className="moviesForm">
            <input
              ref={inputRef}
              required
              type="text"
              placeholder="Write your movie (ex: Matrix Revolutions)"
            />
            <input type="submit" />
          </form>
        </header>
        <main className="searchResults">
          <Movies movies={mappedMovies(movies)} />
        </main>
      </div>
    </>
  );
}

export default App;

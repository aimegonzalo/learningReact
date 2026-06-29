import "./App.css";
import { Movies } from "./components/Movies";
import { useEffect, useRef, useState } from "react";
import { mappedMovies } from "./functions/mappedMovies";
import { fetchMovies } from "./functions/fetchMovies";
import { useDebounce } from "use-debounce";

function App() {
  const [movies, setMovies] = useState();
  const inputRef = useRef();
  const [previousSearch, setPreviousSearch] = useState("");
  const [currentText, setCurrenText] = useState("");
  const [debouncedText] = useDebounce(currentText, 1000);

  const searchMovies = (value) => {
    fetchMovies(previousSearch, value, setMovies);
    setPreviousSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    searchMovies(value);
  };

  const handleChange = () => {
    setCurrenText(inputRef.current.value);
  };

  useEffect(() => {
    if (debouncedText === "") return;
    searchMovies(debouncedText);
  }, [debouncedText]);

  return (
    <>
      <div className="page">
        <header className="header">
          <h1 className="title">OMDb API Movies Finder</h1>
          <form onSubmit={handleSubmit} className="moviesForm">
            <input
              onChange={handleChange}
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

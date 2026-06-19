import "./App.css";
import { Movies } from "./components/Movies";
import { useRef, useState } from "react";

function App() {
  const [movies, setMovies] = useState();
  const inputRef = useRef();

  function fetchMovies(value) {
    const API_MOVIES_ENDPOINT = `http://www.omdbapi.com/?apikey=78a8defb&s=${value}`;
    fetch(API_MOVIES_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.Search);
        setMovies(data.Search);
      });
  }

  //   .then(response => response.json())
  // .then(data => console.log(data));

  const mappedMovies = (movies) => {
    const mappedMovies = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
    return mappedMovies;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    fetchMovies(value);
  };
  
console.log(mappedMovies(movies))
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

export function fetchMovies(value, setMovies) {
  const API_MOVIES_ENDPOINT = `http://www.omdbapi.com/?apikey=78a8defb&s=${value}`;
 fetch(API_MOVIES_ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.Search);
      setMovies(data.Search);
    });
}

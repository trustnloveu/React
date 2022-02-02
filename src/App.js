import React, { useCallback, useEffect, useState } from "react";

import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //! Promise 1 (then & catch)
  // function fetchMoviesHandler() {
  //   fetch("https://swapi.dev/api/films/")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       const transformedMovies = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date,
  //         };
  //       });

  //       setMovies(transformedMovies);
  //     })
  //     .catch((err) => {});
  // }

  //! Promise 2 ( async & await )
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // const response = await fetch("https://swapi.dev/api/films/");
      const response = await fetch(
        "https://react-test-98851-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) throw new Error("Something went wrong."); // To catch error

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(transformedMovies);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  }, []);

  //* useEffect
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) content = <MoviesList movies={movies} />;
  if (movies.length === 0) content = <p>Found no movies.</p>;
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <AddMovie />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;

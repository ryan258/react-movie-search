import React, { useState } from "react";

export default function SearchMovies() {
  // states - inputQuery & movies
  //// useState(defaultValue) - returns an array of 2 things
  //////- 1.) the actual state, thing you want to track
  //////- 2.) a function that will update that state
  //////vv Array Destructuringvv
  const [query, setQuery] = useState("");
  //  create the state for the movies, and update that state when appropriate.
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=f81d49004876b0a9804f72e61282e832&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      // res well hold the raw response
      const res = await fetch(url);
      // res.json will return a promise
      const data = await res.json();

      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <input
        type="text"
        className="input"
        name="query"
        placeholder="i.e. Jurassic Park"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
    // <div className="movies">

    // </div>
  );
}

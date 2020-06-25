import React from "react";

export default function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submit!");

    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=f81d49004876b0a9804f72e61282e832&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      // res well hold the raw response
      const res = await fetch(url);
      // res.json will return a promise
      const data = await res.json();

      console.log(data);
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
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}

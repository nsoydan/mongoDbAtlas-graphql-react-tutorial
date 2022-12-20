import "./App.css";
import { getValidAccessToken } from "./utils/getValidAccessToken";
//require("dotenv").config();
import { useQuery, gql } from "@apollo/client";

import { useState, useEffect } from "react";

const GET_MOVIES = gql`
  query {
    movies {
      _id
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  console.log("response data:", data);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="App">
      <h1> MOVIES </h1>
      {data.movies ? (
        data.movies.map((movie) => (
          <div key={movie._id}>
            <span>{movie.title}</span>
          </div>
        ))
      ) : (
        <span>Movie Yok</span>
      )}
    </div>
  );
}

export default App;

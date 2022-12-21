import "./App.css";
//require("dotenv").config();
import { useQuery, gql } from "@apollo/client";
import Spinner from "./components/spinner.component";
import MovieList from "./components/movieList.component";
import { useDispatch } from "react-redux";
import { setMovies } from "./store/movies/moviesSlice";

const GET_MOVIES = gql`
  query {
    movies {
      _id
      title
      fullplot
      poster
      cast
      imdb {
        rating
      }
    }
  }
`;

function App() {
  const { loading, data } = useQuery(GET_MOVIES);
  console.log("response data:", data);

  const dispatch = useDispatch();
  if (data) {
    dispatch(setMovies(data.movies));
  }

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="App">
      <h1> MOVIES </h1>
      <MovieList />
    </div>
  );
}

export default App;

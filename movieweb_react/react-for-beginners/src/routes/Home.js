import {useEffect, useState} from "react";
import Movie from "../components/Movie";

const API_URL = "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(API_URL);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies)
  return (
      <>
        {loading ? <h1>Now Loading...</h1> : movies.map((movie) => <Movie key={movie.id} id={movie.id} title={movie.title} genres={movie.genres}
                                                                          summary={movie.summary}
                                                                          coverImg={movie.medium_cover_image}/>)}
      </>
  );
}
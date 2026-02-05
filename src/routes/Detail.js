import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailView from "../components/DetailView";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=2d625e4c76dc1a23577a09bf363f6419&language=ko-KR&region=KR&page=1`,
      )
    ).json();
    setMovie(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <DetailView
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          overview={movie.overview}
          genre_ids={movie.genre_ids}
          vote_average={movie.vote_average}
          release_date={movie.release_date}
          backdrop_path={movie.backdrop_path}
        />
      )}
    </div>
  );
}
export default Detail;

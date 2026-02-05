import styles from "./DetailView.module.css";

function detailView({
  backdrop_path,
  id,
  poster_path,
  title,
  overview,
  release_date,
  vote_average,
}) {
  return (
    <div>
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
        }}
      />

      <div className={styles.container}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          className={styles.poster}
        />
        <div className={styles.details}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.release}>개봉일: {release_date}</p>
          <p className={styles.rating}>평점: ⭐ {vote_average}</p>
          <p className={styles.overview}>줄거리: {overview}</p>
        </div>
      </div>
    </div>
  );
}

export default detailView;

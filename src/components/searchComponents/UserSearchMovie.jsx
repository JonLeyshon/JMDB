import { Link } from "react-router-dom";
const UserSearchMovie = (props) => {
  const {
    title,
    overview,
    backdrop_path,
    id,
    poster_path,
    vote_average,
    release_date,
  } = props;

  const readableReleaseDate = release_date
    ? new Date(release_date).toDateString()
    : "Unknown";
  const posterImage = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : "../../../public/images/No-image-Placeholder.svg.png";

  return (
    <>
      <div className="searchResultChild">
        <Link to={"/details/movie/" + id}>
          <img src={posterImage} alt={`${title} poster `} />
        </Link>
        <div className="movieDetails">
          <h3>{title}</h3>
          <small> Original Release: {readableReleaseDate} </small>
          <p>{vote_average} / 10</p>
          <p>{overview}</p>
        </div>
      </div>
    </>
  );
};

export default UserSearchMovie;

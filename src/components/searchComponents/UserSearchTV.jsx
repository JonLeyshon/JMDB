import { Link } from "react-router-dom";

const UserSearchTV = (props) => {
  const {
    name,
    overview,
    backdrop_path,
    id,
    poster_path,
    vote_average,
    first_air_date,
  } = props;

  const readableReleaseDate = new Date(first_air_date).toDateString();
  const posterImage = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : "../../../public/images/No-image-Placeholder.svg.png";

  return (
    <>
      <div className="searchResultChild">
        <Link to={"/details/tv/" + id}>
          <img src={posterImage} alt={`${name} poster `} />
        </Link>
        <div className="movieDetails">
          <h3>{name}</h3>
          <small> Original Release: {readableReleaseDate} </small>
          <p>{vote_average} / 10</p>
          <p>{overview}</p>
        </div>
      </div>
    </>
  );
};

export default UserSearchTV;

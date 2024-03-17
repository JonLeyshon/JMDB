import { Link } from "react-router-dom";

const UserSearchChild = (props) => {
  const {
    title,
    overview,
    backdrop_path,
    id,
    poster_path,
    vote_average,
    release_date,
  } = props;
  const posterImage = `https://image.tmdb.org/t/p/original${poster_path}`;
  const readableReleaseDate = new Date(release_date).toDateString();

  return (
    <div className="searchResultChild">
      <Link to={"/details/" + id}>
        <img src={posterImage} alt={`${title} poster `} />
      </Link>
      <div className="movieDetails">
        <h3>{title}</h3>
        <small> {readableReleaseDate} </small>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default UserSearchChild;

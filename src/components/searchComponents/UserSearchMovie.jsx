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
    : "/Images/No-Image-Placeholder.png";

  const voteAsPercentage = Math.floor(vote_average * 10);

  return (
    <>
      <div className="searchResultChild">
        <div className="imageContainer">
          <Link to={"/details/movie/" + id}>
            <img src={posterImage} alt={`${title} poster `} />
          </Link>
          <div class="rating-circle">
            <div class="rating-content">
              <span>{voteAsPercentage}%</span>
            </div>
          </div>
        </div>
        <div className="movieDetails">
          <h3>{title}</h3>
          <small> Original Release: {readableReleaseDate} </small>
          <p>{overview}</p>
        </div>
      </div>
    </>
  );
};

export default UserSearchMovie;

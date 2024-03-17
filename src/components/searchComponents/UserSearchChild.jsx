import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectResultType } from "../../redux/movieSearchSlice";

const UserSearchChild = (props) => {
  const currentSelection = useSelector(selectResultType);
  const {
    title,
    name,
    overview,
    backdrop_path,
    id,
    poster_path,
    profile_path,
    vote_average,
    release_date,
    first_air_date,
  } = props;

  const imageSrc =
    currentSelection === "movie" || currentSelection === "tv"
      ? poster_path
      : profile_path;
  const posterImage = `https://image.tmdb.org/t/p/original${imageSrc}`;
  const conditionalTitle = currentSelection === "movie" ? title : name;
  const conditionalDate =
    currentSelection === "movie" ? release_date : first_air_date;
  const readableReleaseDate = new Date(conditionalDate).toDateString();

  return (
    <div className="searchResultChild">
      <Link to={"/details/" + id}>
        <img src={posterImage} alt={`${title} poster `} />
      </Link>
      <div className="movieDetails">
        <h3>{conditionalTitle}</h3>
        <small> Original Release: {readableReleaseDate} </small>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default UserSearchChild;

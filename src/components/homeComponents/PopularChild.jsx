import { useSelector } from "react-redux";
import { selectCurrentSelectionPoular } from "../../redux/PopularDataSlice";
import { Link } from "react-router-dom";

const PopularChild = (props) => {
  const { title, poster_path, profile_path, vote_average, release_date, id } =
    props;
  const currentSelection = useSelector(selectCurrentSelectionPoular);

  const movieImage = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : "/Images/No-Image-Placeholder.png";
  const personImage = profile_path
    ? `https://image.tmdb.org/t/p/original${profile_path}`
    : "/Images/No-Image-Placeholder.png";

  const titleOrName =
    currentSelection === "person" || currentSelection === "tv"
      ? props.name
      : title;

  const imageSrc =
    currentSelection === "movie" || currentSelection === "tv"
      ? movieImage
      : personImage;

  const voteAsPercentage = Math.floor(vote_average * 10);

  let detailsLink;

  switch (currentSelection) {
    case "movie":
      detailsLink = "/details/movie/";
      break;
    case "tv":
      detailsLink = "/details/tv/";
      break;
    case "person":
      detailsLink = "/details/person/";
      break;
    default:
      detailsLink = "/";
  }

  return (
    <div className="movieChild">
      <Link to={detailsLink + id}>
        <div className="image-container imageContainer">
          <img src={imageSrc} alt={titleOrName} className="image" />
          {currentSelection === "person" && (
            <div className="overlay">
              <span className="overlay-text">{titleOrName}</span>
            </div>
          )}

          {(currentSelection === "tv" || currentSelection === "movie") && (
            <div className="rating-circle">
              <div className="rating-content">
                <span>{voteAsPercentage}%</span>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default PopularChild;

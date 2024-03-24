import { useSelector } from "react-redux";
import { selectCurrentSelectionPoular } from "../../redux/PopularDataSlice";
import { Link } from "react-router-dom";

const PopularChild = (props) => {
  const { title, poster_path, profile_path, vote_average, release_date, id } =
    props;
  const currentSelection = useSelector(selectCurrentSelectionPoular);

  const movieImage = `https://image.tmdb.org/t/p/original${poster_path}`;
  const personImage = `https://image.tmdb.org/t/p/original${profile_path}`;
  const readableDate = new Date(release_date).toDateString();

  const imageSrc =
    currentSelection === "movie" || currentSelection === "tv"
      ? movieImage
      : personImage;

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
        <img src={imageSrc} alt={title} />
        <div className="MovieChildDetails">
          {/* <p>{title}</p>
          <p className="rating">{vote_average}</p>
          <p>{readableDate}</p> */}
        </div>
      </Link>
    </div>
  );
};

export default PopularChild;

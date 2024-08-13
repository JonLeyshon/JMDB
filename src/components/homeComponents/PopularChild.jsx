import { useSelector } from "react-redux";
import { selectCurrentSelectionPoular } from "../../redux/PopularDataSlice";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
const PopularChild = (props) => {
  const { title, poster_path, profile_path, vote_average, release_date, id } =
    props;
  const currentSelection = useSelector(selectCurrentSelectionPoular);

  const movieImage = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : "../../../public/images/No-image-Placeholder.svg.png";
  const personImage = profile_path
    ? `https://image.tmdb.org/t/p/original${profile_path}`
    : "../../../public/images/No-image-Placeholder.svg.png";

  const titleOrName =
    currentSelection === "person" || currentSelection === "tv"
      ? props.name
      : title;

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
      <Link
        to={detailsLink + id}
        data-tooltip-id="my-tooltip"
        data-tooltip-content={titleOrName}
      >
        <img src={imageSrc} alt={title} />

        <div className="MovieChildDetails">
          {currentSelection === "person" ? (
            <Tooltip
              id="my-tooltip"
              place="bottom"
              type="dark"
              effect="float"
            />
          ) : null}
        </div>
      </Link>
    </div>
  );
};

export default PopularChild;

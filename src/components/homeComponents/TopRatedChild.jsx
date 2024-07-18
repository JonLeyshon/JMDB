import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectcurrentSelectionTR } from "../../redux/topRatedSlice";
import { Tooltip } from "react-tooltip";

const TopRatedChild = (props) => {
  const { id, title, overview, poster_path, vote_average } = props;
  const currentSelection = useSelector(selectcurrentSelectionTR);
  const image = `https://image.tmdb.org/t/p/original${poster_path}`;
  const linkPath =
    currentSelection === "movie" ? "details/movie/" : "details/tv/";

  const titleOrName =
    currentSelection === "person" || currentSelection === "tv"
      ? props.name
      : title;
  return (
    <div className="movieChildSmall">
      <Link
        to={linkPath + id}
        data-tooltip-id="my-tooltip"
        data-tooltip-content={titleOrName}
      >
        <img src={image} />
        <Tooltip id="my-tooltip" place="top" />
      </Link>
    </div>
  );
};

export default TopRatedChild;

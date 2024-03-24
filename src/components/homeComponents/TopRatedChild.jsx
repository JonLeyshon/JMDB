import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectcurrentSelectionTR } from "../../redux/topRatedSlice";
const TopRatedChild = (props) => {
  const { id, title, overview, poster_path, vote_average } = props;
  const currentSelection = useSelector(selectcurrentSelectionTR);
  const image = `https://image.tmdb.org/t/p/original${poster_path}`;
  const linkPath =
    currentSelection === "movie" ? "details/movie/" : "details/tv/";
  return (
    <div className="movieChild">
      <Link to={linkPath + id}>
        <img src={image} />
      </Link>
    </div>
  );
};

export default TopRatedChild;

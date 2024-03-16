import { useSelector } from "react-redux";
import { selectCurrentSelectionPoular } from "../redux/PopularDataSlice";

const PopularChild = (props) => {
  const { title, poster_path, profile_path } = props;
  const currentSelection = useSelector(selectCurrentSelectionPoular);

  const movieImage = `https://image.tmdb.org/t/p/original${poster_path}`;
  const personImage = `https://image.tmdb.org/t/p/original${profile_path}`;

  const imageSrc =
    currentSelection === "movie" || currentSelection === "tv"
      ? movieImage
      : personImage;
  return (
    <div className="movieChild">
      <img src={imageSrc} alt={title} />{" "}
    </div>
  );
};

export default PopularChild;

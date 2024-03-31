import { useDispatch, useSelector } from "react-redux";
import {
  selectcurrentSelectionTR,
  setCurrentSelectionTR,
} from "../../redux/topRatedSlice";

const TopRatedControls = () => {
  const dispatch = useDispatch();
  const currentSelection = useSelector(selectcurrentSelectionTR);
  return (
    <div className="controls">
      <button
        className={currentSelection === "movie" ? "active" : ""}
        onClick={() => {
          dispatch(setCurrentSelectionTR("movie"));
        }}
      >
        Movies
      </button>
      <button
        className={currentSelection === "tv" ? "active" : ""}
        onClick={() => {
          dispatch(setCurrentSelectionTR("tv"));
        }}
      >
        TV
      </button>
    </div>
  );
};

export default TopRatedControls;

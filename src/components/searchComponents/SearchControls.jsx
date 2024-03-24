import { useDispatch, useSelector } from "react-redux";
import { selectResultType, setResultType } from "../../redux/movieSearchSlice";

const SearchControls = () => {
  const dispatch = useDispatch();
  const currentSelection = useSelector(selectResultType);
  return (
    <div className="searchControls">
      <button
        className={currentSelection === "movie" ? "active" : ""}
        onClick={() => {
          dispatch(setResultType("movie"));
        }}
      >
        Movies
      </button>
      <button
        className={currentSelection === "tv" ? "active" : ""}
        onClick={() => {
          dispatch(setResultType("tv"));
        }}
      >
        TV
      </button>
      <button
        className={currentSelection === "person" ? "active" : ""}
        onClick={() => {
          dispatch(setResultType("person"));
        }}
      >
        People
      </button>
    </div>
  );
};

export default SearchControls;

import { useDispatch } from "react-redux";
import { setResultType } from "../../redux/movieSearchSlice";

const SearchControls = () => {
  const dispatch = useDispatch();

  return (
    <div className="searchControls">
      <button
        className="active"
        onClick={() => {
          dispatch(setResultType("movie"));
        }}
      >
        Movies
      </button>
      <button
        onClick={() => {
          dispatch(setResultType("tv"));
        }}
      >
        TV
      </button>
      <button
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

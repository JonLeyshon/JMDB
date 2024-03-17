import { getMoviesBySearch } from "../utils/getDataUtils";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMovieSearchData } from "../../redux/movieSearchSlice";

const UserSearch = () => {
  const dispatch = useDispatch();

  let userSearch;

  const handleSearchData = async () => {
    const data = await getMoviesBySearch(userSearch);
    dispatch(setMovieSearchData(data));
  };

  return (
    <>
      <div className="searchTools">
        <input
          type="text"
          placeholder="Find your movie, tv show or actor"
          onChange={(e) => {
            userSearch = e.target.value;
            console.log(userSearch);
          }}
        />

        {/* Link adding extra /search each time pressed */}
        <Link to="/search">
          <button
            onClick={() => {
              handleSearchData();
            }}
          >
            Search
          </button>
        </Link>
      </div>
    </>
  );
};

export default UserSearch;

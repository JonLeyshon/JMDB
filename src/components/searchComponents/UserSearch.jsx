import { getMoviesBySearch } from "../utils/getDataUtils";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectResultType,
  selectSearchTerm,
  setMovieSearchData,
  setSearchTerm,
} from "../../redux/movieSearchSlice";
import { useEffect } from "react";

const UserSearch = () => {
  const dispatch = useDispatch();
  const resultType = useSelector(selectResultType);
  const searchTerm = useSelector(selectSearchTerm);

  const handleSearchData = async () => {
    const data = await getMoviesBySearch(searchTerm, resultType);
    dispatch(setMovieSearchData(data));
  };

  useEffect(() => {
    handleSearchData();
  }, [resultType]);

  return (
    <>
      <div className="searchTools">
        <input
          type="text"
          placeholder="Find your movie, tv show or actor"
          onChange={(e) => {
            dispatch(setSearchTerm(e.target.value));
          }}
          value={searchTerm}
        />

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

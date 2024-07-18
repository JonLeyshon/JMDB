import { getMoviesBySearch } from "../utils/getDataUtils";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectResultType,
  selectSearchTerm,
  setMovieSearchData,
  setSearchTerm,
} from "../../redux/movieSearchSlice";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";

const UserSearch = () => {
  const dispatch = useDispatch();
  const resultType = useSelector(selectResultType);
  const searchTerm = useSelector(selectSearchTerm);
  const [loading, setLoading] = useState(false);

  const handleSearchData = async () => {
    if (!searchTerm || !searchTerm.length) {
      return;
    }
    setLoading(true);
    const data = await getMoviesBySearch(searchTerm, resultType);
    dispatch(setMovieSearchData(data));
    setLoading(false);
  };

  useEffect(() => {
    handleSearchData();
  }, [resultType]);

  const onSearchClick = () => {
    handleSearchData();
  };

  return (
    <>
      <div className="searchTools fullscreen">
        <input
          type="text"
          placeholder="Find your movie, tv show or actor"
          onChange={(e) => {
            dispatch(setSearchTerm(e.target.value));
          }}
          value={searchTerm}
        />
        <Link to="/search">
          <button onClick={onSearchClick} className="searchButton">
            {loading ? <Spinner /> : "Search"}
          </button>
        </Link>
      </div>
    </>
  );
};

export default UserSearch;

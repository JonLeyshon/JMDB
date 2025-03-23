import { getMoviesBySearch } from "../utils/getDataUtils";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();
  const url = useParams();

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

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(setSearchTerm(""));
    }
  }, [location.pathname, dispatch]);

  const onSearchClick = () => {
    handleSearchData();
    navigate("/search");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearchClick();
    }
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
          onKeyDown={handleKeyPress}
        />
        <button onClick={onSearchClick} className="searchButton">
          {loading ? <Spinner /> : "Search"}
        </button>
      </div>
    </>
  );
};

export default UserSearch;

import { getMoviesBySearch } from "./getDataUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  setMovieSearchData,
  selectMovieSearchData,
} from "../redux/movieSearchSlice";
import UserSearchContainer from "./UserSearchContainer";
import { Link } from "react-router-dom";

const UserSearch = () => {
  const dispatch = useDispatch();
  const movieData = useSelector(selectMovieSearchData);
  let userSearch;
  const getUserSearch = async (e) => {
    userSearch = e.target.value;
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
            getUserSearch(e);
          }}
        />

        {/* <Link to="search"> */}
        <button>Search</button>
        {/* </Link> */}
      </div>

      <UserSearchContainer />
    </>
  );
};

export default UserSearch;

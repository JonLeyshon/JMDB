import axios from "axios";
import { getMoviesBySearch } from "./getDataUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  setMovieSearchData,
  selectMovieSearchData,
} from "../redux/movieSearchSlice";

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
      <input
        type="text"
        placeholder="Search Your Movie"
        onChange={(e) => {
          getUserSearch(e);
        }}
      />
    </>
  );
};

export default UserSearch;

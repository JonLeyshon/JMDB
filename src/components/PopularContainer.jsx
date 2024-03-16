import { useDispatch, useSelector } from "react-redux";
import {
  selectPopularData,
  setCurrentSelectionPopular,
} from "../redux/PopularDataSlice";
import PopularChild from "./PopularChild";

const PopularContainer = () => {
  const popularData = useSelector(selectPopularData);
  const dispatch = useDispatch();

  if (popularData && popularData.length > 0) {
    return (
      <>
        <h2 className="movieContainerTitle"> Popular Right Now </h2>
        <div className="titleDetails">
          <button
            onClick={() => {
              dispatch(setCurrentSelectionPopular("movie"));
            }}
          >
            Movies
          </button>
          <button
            onClick={() => {
              dispatch(setCurrentSelectionPopular("tv"));
            }}
          >
            TV
          </button>
          <button
            onClick={() => {
              dispatch(setCurrentSelectionPopular("person"));
            }}
          >
            People
          </button>
        </div>

        <div className="movieContainerDiv">
          {popularData.map((item) => {
            return <PopularChild {...item} />;
          })}
        </div>
      </>
    );
  }
};

export default PopularContainer;

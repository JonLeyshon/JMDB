import { useDispatch, useSelector } from "react-redux";
import {
  selectTopRatedData,
  setCurrentSelectionTR,
} from "../redux/topRatedSlice";
import TopRatedChild from "./TopRatedChild";

const TopRatedContainer = () => {
  const tRData = useSelector(selectTopRatedData);
  const dispatch = useDispatch();
  if (tRData && tRData.length > 0) {
    return (
      <>
        <h2 className="movieContainerTitle"> Top Rated </h2>
        <button
          onClick={() => {
            dispatch(setCurrentSelectionTR("movie"));
          }}
        >
          Movies
        </button>
        <button
          onClick={() => {
            dispatch(setCurrentSelectionTR("tv"));
          }}
        >
          TV
        </button>
        <div className="movieContainerDiv">
          {tRData.map((item) => {
            return <TopRatedChild {...item} />;
          })}
        </div>
      </>
    );
  }
};

export default TopRatedContainer;

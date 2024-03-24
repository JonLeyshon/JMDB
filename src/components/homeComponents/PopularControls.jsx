import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentSelectionPoular,
  setCurrentSelectionPopular,
} from "../../redux/PopularDataSlice";

const PopularControls = () => {
  const currentSelection = useSelector(selectCurrentSelectionPoular);
  const dispatch = useDispatch();
  return (
    <>
      <div className="PopularControls">
        <button
          className={currentSelection === "movie" ? "active" : ""}
          onClick={() => {
            dispatch(setCurrentSelectionPopular("movie"));
          }}
        >
          Movies
        </button>
        <button
          className={currentSelection === "tv" ? "active" : ""}
          onClick={() => {
            dispatch(setCurrentSelectionPopular("tv"));
          }}
        >
          TV
        </button>
        <button
          className={currentSelection === "person" ? "active" : ""}
          onClick={() => {
            dispatch(setCurrentSelectionPopular("person"));
          }}
        >
          People
        </button>
      </div>
    </>
  );
};

export default PopularControls;

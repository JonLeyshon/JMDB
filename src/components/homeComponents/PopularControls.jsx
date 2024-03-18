import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentSelectionPopular } from "../../redux/PopularDataSlice";

const PopularControls = () => {
  const [activeButton, setActiveButton] = useState("movie");
  const dispatch = useDispatch();
  return (
    <>
      <div className="PopularControls">
        <button
          className={activeButton === "movie" ? "active" : ""}
          onClick={() => {
            dispatch(setCurrentSelectionPopular("movie"));
            setActiveButton("movie");
          }}
        >
          Movies
        </button>
        <button
          className={activeButton === "tv" ? "active" : ""}
          onClick={() => {
            dispatch(setCurrentSelectionPopular("tv"));
            setActiveButton("tv");
          }}
        >
          TV
        </button>
        <button
          className={activeButton === "person" ? "active" : ""}
          onClick={() => {
            dispatch(setCurrentSelectionPopular("person"));
            setActiveButton("person");
          }}
        >
          People
        </button>
      </div>
    </>
  );
};

export default PopularControls;

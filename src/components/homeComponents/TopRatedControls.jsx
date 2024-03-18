import { useDispatch } from "react-redux";
import { useState } from "react";
import { setCurrentSelectionTR } from "../../redux/topRatedSlice";

const TopRatedControls = () => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState("movie");
  return (
    <>
      <button
        className={activeButton === "movie" ? "active" : ""}
        onClick={() => {
          dispatch(setCurrentSelectionTR("movie"));
          setActiveButton("movie");
        }}
      >
        Movies
      </button>
      <button
        className={activeButton === "tv" ? "active" : ""}
        onClick={() => {
          dispatch(setCurrentSelectionTR("tv"));
          setActiveButton("tv");
        }}
      >
        TV
      </button>
    </>
  );
};

export default TopRatedControls;

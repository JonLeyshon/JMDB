import { useDispatch } from "react-redux";
import { setResultType } from "../../redux/movieSearchSlice";
import { useState } from "react";

const SearchControls = () => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState("movie");
  console.log(activeButton);
  return (
    <div className="searchControls">
      <button
        className={activeButton === "movie" ? "active" : ""}
        onClick={() => {
          dispatch(setResultType("movie"));
          setActiveButton("movie");
        }}
      >
        Movies
      </button>
      <button
        className={activeButton === "tv" ? "active" : ""}
        onClick={() => {
          dispatch(setResultType("tv"));
          setActiveButton("tv");
        }}
      >
        TV
      </button>
      <button
        className={activeButton === "person" ? "active" : ""}
        onClick={() => {
          dispatch(setResultType("person"));
          setActiveButton("person");
        }}
      >
        People
      </button>
    </div>
  );
};

export default SearchControls;

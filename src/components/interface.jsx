import { useEffect } from "react";

import UserSearch from "./UserSearch";
import { getPopularData, getTopRatedData } from "./getDataUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentSelectionPoular,
  setPopularData,
} from "../redux/PopularDataSlice";
import PopularContainer from "./PopularContainer";
import {
  selectcurrentSelectionTR,
  setTopRatedData,
} from "../redux/topRatedSlice.js";
import TopRatedContainer from "./topRatedContainer.jsx";
import { selectMovieSearchData } from "../redux/movieSearchSlice.js";
import { Routes, Route } from "react-router-dom";
import SearchResultsPage from "./SearchResults.jsx";
import Home from "./pages/Home.jsx";

const Interface = () => {
  const dispatch = useDispatch();
  const userSeachData = useSelector(selectMovieSearchData);
  const popularSelection = useSelector(selectCurrentSelectionPoular);
  const topRatedSelection = useSelector(selectcurrentSelectionTR);
  console.log(popularSelection);

  const handlePopularData = async () => {
    const data = await getPopularData(popularSelection);
    dispatch(setPopularData(data));
  };

  const handleTopRatedData = async () => {
    const data = await getTopRatedData(topRatedSelection);

    dispatch(setTopRatedData(data));
  };

  useEffect(() => {
    handlePopularData();
    handleTopRatedData();
  }, [popularSelection, topRatedSelection]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </>
  );
};

export default Interface;

import { useEffect } from "react";
import { getPopularData, getTopRatedData } from "./utils/getDataUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentSelectionPoular,
  setPopularData,
} from "../redux/PopularDataSlice";
import {
  selectcurrentSelectionTR,
  setTopRatedData,
} from "../redux/topRatedSlice.js";
import { Routes, Route } from "react-router-dom";
import SearchResultsPage from "./searchComponents/SearchResultsPage.jsx";
import Home from "./pages/Home.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import PersonDetails from "./pages/PersonDetails.jsx";
import TVDetails from "./pages/TVDetails.jsx";

const Interface = () => {
  const dispatch = useDispatch();
  const popularSelection = useSelector(selectCurrentSelectionPoular);
  const topRatedSelection = useSelector(selectcurrentSelectionTR);

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
        <Route path="/details/movie/:id" element={<MovieDetails />} />
        <Route path="/details/person/:id" element={<PersonDetails />} />
        <Route path="/details/tv/:id" element={<TVDetails />} />
      </Routes>
    </>
  );
};

export default Interface;

import { urlID } from "../utils/miscVariables";
import { getIndividualMovieData } from "../utils/getDataUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIndividualMovieData,
  setIndividualMovieData,
} from "../../redux/individualMovieSlice";
import { useEffect, useState } from "react";
import IndiMovieDetails from "../individualMovieComponents/indiMovieDetails";
import IndieMovieReviews from "../individualMovieComponents/IndiMovieReviews";
import IndiCastDetails from "../individualMovieComponents/IndiCastDetails";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const indiMovieData = useSelector(selectIndividualMovieData);

  const handleIndividualData = async () => {
    const data = await getIndividualMovieData(urlID);
    console.log(urlID);
    console.log(data);
    dispatch(setIndividualMovieData(data));
  };

  useEffect(() => {
    handleIndividualData();
  }, [urlID]);

  if (!indiMovieData) {
    return "loading...";
  } else {
    return (
      <>
        <IndiMovieDetails />
        <IndiCastDetails />
        <IndieMovieReviews />
      </>
    );
  }
};

export default MovieDetails;

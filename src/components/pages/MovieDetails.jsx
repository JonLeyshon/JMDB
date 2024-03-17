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
  const movieData = useSelector(selectIndividualMovieData);
  const [loading, setLoading] = useState(true);

  const handleIndividualData = async () => {
    const data = await getIndividualMovieData(urlID);
    dispatch(setIndividualMovieData(data));
    setLoading(false);
    console.log(movieData);
  };

  useEffect(() => {
    handleIndividualData();
  }, [urlID]);

  if (loading || !movieData) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <IndiMovieDetails props={movieData} />
      <IndiCastDetails />
      <IndieMovieReviews />
    </>
  );
};

export default MovieDetails;

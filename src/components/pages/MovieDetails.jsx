import {
  getIndividualMediaData,
  getIndividualCast,
} from "../utils/getDataUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIndividualMovieCast,
  selectIndividualMovieData,
  setIndividualMovieCast,
  setIndividualMovieData,
} from "../../redux/individualMovieSlice";
import { useEffect } from "react";
import IndiMovieDetails from "../individualMediaComponents/indiMovieDetails";
import IndieMovieReviews from "../individualMediaComponents/IndiMovieReviews";
import IndiCastDetails from "../individualMediaComponents/IndiCastDetails";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const indiMovieData = useSelector(selectIndividualMovieData);
  const indiMovieCast = useSelector(selectIndividualMovieCast);

  const handleIndividualData = async () => {
    const data = await getIndividualMediaData(id, "movie");
    const cast = await getIndividualCast(id, "movie");
    dispatch(setIndividualMovieData(data));
    dispatch(setIndividualMovieCast(cast));
  };

  useEffect(() => {
    handleIndividualData();
  }, [id]);
  console.log(indiMovieCast, indiMovieData);
  if (!indiMovieData || !indiMovieCast) {
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

import {
  getIndividualMediaData,
  getIndividualCast,
  getReviewsData,
} from "../utils/getDataUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIndividualMediaCast,
  selectIndividualMediaData,
  setIndividualMediaCast,
  setIndividualMediaData,
  setIndividualMediaReviews,
} from "../../redux/individualMediaSlice";
import { useEffect } from "react";
import IndiMovieDetails from "../individualMediaComponents/indiMovieDetails";
import IndiCastDetails from "../individualMediaComponents/IndiCastDetails";
import { useParams } from "react-router-dom";
import IndieMediaReviews from "../individualMediaComponents/IndiMediaReviews";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const indiMovieData = useSelector(selectIndividualMediaData);
  const indiMovieCast = useSelector(selectIndividualMediaCast);

  const handleIndividualData = async () => {
    const data = await getIndividualMediaData(id, "movie");
    const cast = await getIndividualCast(id, "movie");
    const reviews = await getReviewsData(id, "movie");
    dispatch(setIndividualMediaData(data));
    dispatch(setIndividualMediaCast(cast));
    dispatch(setIndividualMediaReviews(reviews));
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
        <IndieMediaReviews />
      </>
    );
  }
};

export default MovieDetails;

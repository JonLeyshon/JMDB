import {
  getIndividualMediaData,
  getIndividualCast,
  getReviewsData,
  getIndividualMediaVideos,
} from "../utils/getDataUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIndividualMediaCast,
  selectIndividualMediaData,
  setIndividualMediaCast,
  setIndividualMediaData,
  setIndividualMediaReviews,
  setIndividualMediaVideos,
} from "../../redux/individualMediaSlice";
import { useEffect } from "react";
import IndiMovieDetails from "../IndividualMediaComponents/indiMovieDetails";
import IndiCastDetails from "../IndividualMediaComponents/IndiCastDetails";
import { useParams } from "react-router-dom";
import IndieMediaReviews from "../individualMediaComponents/IndiMediaReviews";
import IndiMediaTrailer from "../individualMediaComponents/IndiMediaTrailer";
import LoadingPage from "./Loading";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const indiMovieData = useSelector(selectIndividualMediaData);
  const indiMovieCast = useSelector(selectIndividualMediaCast);

  const handleIndividualData = async () => {
    dispatch(setIndividualMediaData(""));
    const data = await getIndividualMediaData(id, "movie");
    const cast = await getIndividualCast(id, "movie");
    const reviews = await getReviewsData(id, "movie");
    const videos = await getIndividualMediaVideos(id, "movie");
    dispatch(setIndividualMediaData(data));
    dispatch(setIndividualMediaCast(cast));
    dispatch(setIndividualMediaReviews(reviews));
    dispatch(setIndividualMediaVideos(videos));
  };

  useEffect(() => {
    handleIndividualData();
  }, [id]);

  if (!indiMovieData || !indiMovieCast) {
    return <LoadingPage />;
  } else {
    return (
      <>
        <IndiMovieDetails />
        <IndiCastDetails />
        <IndiMediaTrailer />
        <IndieMediaReviews />
      </>
    );
  }
};

export default MovieDetails;

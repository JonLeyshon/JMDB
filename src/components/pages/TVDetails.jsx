import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getIndividualMediaData,
  getIndividualCast,
  getReviewsData,
} from "../utils/getDataUtils";
import {
  selectIndividualMediaData,
  selectIndividualMediaCast,
  setIndividualMediaCast,
  setIndividualMediaData,
  setIndividualMediaReviews,
  selectIndividualMediaReviews,
} from "../../redux/individualMediaSlice";
import { useEffect } from "react";
import IndiTVDetails from "../individualMediaComponents/indiTVDetails";
import IndiCastDetails from "../individualMediaComponents/IndiCastDetails";
import IndieMediaReviews from "../individualMediaComponents/IndiMediaReviews";
import IndiMediaTrailer from "../individualMediaComponents/IndiMediaTrailer";
import Spinner from "../Spinner";
import LoadingPage from "./Loading";

const TVDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const indiTVData = useSelector(selectIndividualMediaData);
  const indiTVCast = useSelector(selectIndividualMediaCast);
  const indiTVReviews = useSelector(selectIndividualMediaReviews);

  const handleTvData = async () => {
    dispatch(setIndividualMediaData(""));
    const data = await getIndividualMediaData(id, "tv");
    const cast = await getIndividualCast(id, "tv");
    const reviews = await getReviewsData(id, "tv");
    dispatch(setIndividualMediaData(data));
    dispatch(setIndividualMediaCast(cast));
    dispatch(setIndividualMediaReviews(reviews));
  };

  useEffect(() => {
    handleTvData();
  }, [id]);

  if (!indiTVData || !indiTVCast || !indiTVReviews) {
    return <LoadingPage />;
  } else {
    return (
      <>
        <IndiTVDetails />
        <IndiCastDetails />
        <IndieMediaReviews />
        {/* <IndiMediaTrailer /> */}
      </>
    );
  }
};

export default TVDetails;

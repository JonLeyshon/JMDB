import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCreditsData, getIndividualMediaData } from "../utils/getDataUtils";
import {
  selectIndividualActorData,
  setActorMovies,
  setActorTv,
  setIndividualActorData,
} from "../../redux/individualActorSlice";
import { useEffect } from "react";
import IndiPersonDetails from "../individualMediaComponents/IndiPersonDetails";
import Credits from "../individualMediaComponents/Credits";
import LoadingPage from "./Loading";

const PersonDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector(selectIndividualActorData);

  const handleIndividualActorData = async () => {
    dispatch(setIndividualActorData(""));
    const data = await getIndividualMediaData(id, "person");
    const movieCredits = await getCreditsData(id, "movie");
    const TVCredits = await getCreditsData(id, "tv");
    dispatch(setIndividualActorData(data));
    dispatch(setActorMovies(movieCredits));
    dispatch(setActorTv(TVCredits));
  };

  useEffect(() => {
    handleIndividualActorData();
  }, [id]);
  if (!data) {
    return <LoadingPage />;
  } else {
    return (
      <>
        <IndiPersonDetails />
        <Credits />
      </>
    );
  }
};

export default PersonDetails;

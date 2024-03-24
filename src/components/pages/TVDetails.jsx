import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getIndividualMediaData,
  getIndividualCast,
} from "../utils/getDataUtils";
import {
  selectIndividualTVData,
  selectIndividualTVCast,
  setIndividualTVCast,
  setIndividualTVData,
} from "../../redux/individualTVSlice";
import { useEffect } from "react";
import IndiTVDetails from "../individualMediaComponents/indiTVDetails";
import IndiCastDetails from "../individualMediaComponents/IndiCastDetails";

const TVDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const indiTVData = useSelector(selectIndividualTVData);
  const indiTVCast = useSelector(selectIndividualTVCast);

  const handleTvData = async () => {
    const data = await getIndividualMediaData(id, "tv");
    const cast = await getIndividualCast(id, "tv");
    dispatch(setIndividualTVData(data));
    dispatch(setIndividualTVCast(cast));
  };

  useEffect(() => {
    handleTvData();
  }, [id]);

  if (!indiTVData || !indiTVCast) {
    return "Loading...";
  } else {
    return (
      <>
        <IndiTVDetails />
        <IndiCastDetails />
      </>
    );
  }
};

export default TVDetails;

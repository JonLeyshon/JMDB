import { useEffect } from "react";
import axios from "axios";
import { APIKEY } from "./miscVariables";
import UserSearch from "./UserSearch";
import { getPopularData } from "./getDataUtils";
import { useDispatch } from "react-redux";
import { setPopularData } from "../redux/PopularDataSlice";
import PopularContainer from "./PopularContainer";

const Interface = () => {
  const dispatch = useDispatch();
  const handlePopularData = async () => {
    const data = await getPopularData();
    dispatch(setPopularData(data));
  };

  useEffect(() => {
    handlePopularData();
  }, []);

  return (
    <>
      <UserSearch />
      <PopularContainer />
    </>
  );
};

export default Interface;

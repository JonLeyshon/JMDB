import { useSelector } from "react-redux";
import { selectTopRatedData } from "../../redux/topRatedSlice";
import TopRatedChild from "./TopRatedChild";
import TopRatedControls from "./TopRatedControls";

const TopRatedContainer = () => {
  const tRData = useSelector(selectTopRatedData);
  if (tRData && tRData.length > 0) {
    return (
      <>
        <h2 className="movieContainerTitle"> Top Rated </h2>
        <TopRatedControls />
        <div className="movieContainerDiv">
          {tRData.map((item) => {
            return <TopRatedChild {...item} />;
          })}
        </div>
      </>
    );
  }
};

export default TopRatedContainer;

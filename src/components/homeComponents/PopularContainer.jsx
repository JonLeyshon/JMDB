import { useSelector } from "react-redux";
import { selectPopularData } from "../../redux/PopularDataSlice";
import PopularChild from "./PopularChild";
import PopularControls from "./PopularControls";

const PopularContainer = () => {
  const popularData = useSelector(selectPopularData);

  if (popularData && popularData.length > 0) {
    return (
      <>
        <h2 className="movieContainerTitle"> Popular Right Now </h2>
        <PopularControls />
        <div className="movieContainerDiv">
          {popularData.map((item) => {
            return <PopularChild key={item.id} {...item} />;
          })}
        </div>
      </>
    );
  }
};

export default PopularContainer;

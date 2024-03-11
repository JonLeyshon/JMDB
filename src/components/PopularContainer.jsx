import { useSelector } from "react-redux";
import { selectPopularData } from "../redux/PopularDataSlice";
import PopularChild from "./PopularChild";

const PopularContainer = () => {
  const popularData = useSelector(selectPopularData);
  //   console.log(popularData);
  if (popularData && popularData.length > 0) {
    return (
      <>
        {popularData.map((item) => {
          return <PopularChild {...item} />;
        })}
      </>
    );
  }
  //   return (
  //     <>
  //       {popularData.map((item) => {
  //         return <PopularChild {...item} />;
  //       })}
  //     </>
  //   );
};

export default PopularContainer;

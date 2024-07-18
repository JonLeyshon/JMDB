import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { selectPopularData } from "../../redux/PopularDataSlice";
import PopularChild from "./PopularChild";
import PopularControls from "./PopularControls";
import { responsiveLarge } from "../utils/CarouselVariables";

const PopularCarousel = () => {
  const popularData = useSelector(selectPopularData);

  if (popularData && popularData.length > 0) {
    return (
      <>
        <h2 className="movieContainerTitle"> Popular Right Now </h2>
        <PopularControls />
        <Carousel responsive={responsiveLarge}>
          {popularData.map((item) => {
            return <PopularChild key={item.id} {...item} />;
          })}
        </Carousel>
      </>
    );
  }
};

export default PopularCarousel;

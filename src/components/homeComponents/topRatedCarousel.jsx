import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { selectTopRatedData } from "../../redux/topRatedSlice";
import TopRatedChild from "./TopRatedChild";
import TopRatedControls from "./TopRatedControls";

const TopRatedCarousel = () => {
  const responsive = {
    ultraWideDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 8,
    },
    SuperLargeDesktop: {
      breakpoint: { max: 1500, min: 1150 },
      items: 6,
    },
    LargeDesktop: {
      breakpoint: { max: 1150, min: 1050 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1050, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };

  const tRData = useSelector(selectTopRatedData);

  if (tRData && tRData.length > 0) {
    return (
      <>
        <h2 className="movieContainerTitle"> Top Rated </h2>
        <TopRatedControls />
        <Carousel responsive={responsive}>
          {tRData.map((item) => {
            return <TopRatedChild key={item.id} {...item} />;
          })}
        </Carousel>
      </>
    );
  }
};

export default TopRatedCarousel;

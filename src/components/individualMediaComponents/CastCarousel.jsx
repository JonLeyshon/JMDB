import { useSelector } from "react-redux";
import { responsiveSmall } from "../utils/CarouselVariables";
import { selectIndividualMediaCast } from "../../redux/individualMediaSlice";
import IndiCastActors from "./IndiCastActors";
import Carousel from "react-multi-carousel";

const CastCarousel = () => {
  const CastArray = useSelector(selectIndividualMediaCast);

  if (!CastArray?.length) return "<p>No cast found</p>";
  return (
    <>
      <div className="castContainer">
        <Carousel responsive={responsiveSmall}>
          {CastArray.map((item) => (
            <IndiCastActors key={item.id} {...item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CastCarousel;

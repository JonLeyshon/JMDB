import { useSelector } from "react-redux";
import {
  selectActorMovieCredits,
  selectActorTVCredits,
} from "../../redux/individualActorSlice";
import CreditsChild from "./CreditsChild";
import Carousel from "react-multi-carousel";
import { responsiveSmall } from "../utils/CarouselVariables";
import Spinner from "../Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";

const Credits = () => {
  const movieCredits = useSelector(selectActorMovieCredits);
  const tvCredits = useSelector(selectActorTVCredits);

  if (!movieCredits.length && !tvCredits.length) return <Spinner />;

  return (
    <>
      <h2 className="indiMediaTitle">
        Movies <FontAwesomeIcon icon={faClapperboard} />
      </h2>
      <div className="movieContainerDiv">
        {movieCredits.length > 0 ? (
          <Carousel responsive={responsiveSmall}>
            {movieCredits.slice(0, 20).map((item) => (
              <CreditsChild key={item.id} {...item} media_type="movie" />
            ))}
          </Carousel>
        ) : (
          <p>No movies found.</p>
        )}
      </div>
      <h2 className="indiMediaTitle">
        TV Shows <FontAwesomeIcon icon={faTv} />
      </h2>
      <div className="movieContainerDiv">
        {tvCredits.length > 0 ? (
          <Carousel responsive={responsiveSmall}>
            {tvCredits.slice(0, 20).map((item) => (
              <CreditsChild key={item.id} {...item} media_type="tv" />
            ))}
          </Carousel>
        ) : (
          <p>No TV shows found.</p>
        )}
      </div>
    </>
  );
};

export default Credits;

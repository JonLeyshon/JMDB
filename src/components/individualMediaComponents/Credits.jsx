import { useSelector } from "react-redux";
import {
  selectActorMovieCredits,
  selectActorTVCredits,
} from "../../redux/individualActorSlice";
import CreditsChild from "./CreditsChild";

const Credits = () => {
  const movieCredits = useSelector(selectActorMovieCredits);
  const tvCredits = useSelector(selectActorTVCredits);

  return (
    <>
      <h2>Movies: </h2>
      <div className="movieContainerDiv">
        {movieCredits.slice(0, 20).map((item) => {
          return <CreditsChild {...item} media_type="movie" />;
        })}
      </div>
      <h2>TV Shows:</h2>
      <div className="movieContainerDiv">
        {tvCredits.slice(0, 20).map((item) => {
          return <CreditsChild {...item} media_type="tv" />;
        })}
      </div>
    </>
  );
};

export default Credits;

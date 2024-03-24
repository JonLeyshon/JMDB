import { useSelector } from "react-redux";
import { selectIndividualMovieCast } from "../../redux/individualMovieSlice";
import IndiCastActors from "./indiCastActors";
const IndiCastDetails = () => {
  const { cast } = useSelector(selectIndividualMovieCast);

  if (cast && cast.length > 0) {
    return (
      <>
        <h2> Cast </h2>
        <div className="castContainer">
          {cast.map((item) => (
            <IndiCastActors {...item} />
          ))}
        </div>
      </>
    );
  }
};

export default IndiCastDetails;

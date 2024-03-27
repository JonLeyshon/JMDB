import { useSelector } from "react-redux";
import { selectIndividualMediaCast } from "../../redux/individualMediaSlice";
import IndiCastActors from "./indiCastActors";
const IndiCastDetails = () => {
  const { cast } = useSelector(selectIndividualMediaCast);

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

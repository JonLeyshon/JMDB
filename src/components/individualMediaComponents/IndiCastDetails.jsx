import { useSelector } from "react-redux";
import { selectIndividualMediaCast } from "../../redux/individualMediaSlice";
import IndiCastActors from "./IndiCastActors";
import Spinner from "../Spinner";
import CastCarousel from "./CastCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const IndiCastDetails = () => {
  const CastArray = useSelector(selectIndividualMediaCast);

  if (!CastArray?.length) return <Spinner />;

  return (
    <>
      <h2 className="indiMediaTitle">
        {" "}
        Cast <FontAwesomeIcon icon={faUser} />{" "}
      </h2>
      <CastCarousel />
      {/* <div className="castContainer">
        {cast.map((item) => (
          <IndiCastActors {...item} />
        ))}
      </div> */}
    </>
  );
};

export default IndiCastDetails;

import { useSelector } from "react-redux";
import { selectIndividualActorData } from "../../redux/individualActorSlice";

const IndiPersonDetails = () => {
  const biographyData = useSelector(selectIndividualActorData);
  const {
    name,
    biography,
    gender,
    known_for_department,
    place_of_birth,
    profile_path,
  } = biographyData;

  const posterImage = profile_path
    ? `https://image.tmdb.org/t/p/original${profile_path}`
    : "../../../public/images/No-image-Placeholder.svg.png";
  return (
    <>
      <div className="biographyContainer">
        <h1>{name}</h1>
        <h3> Known for: {known_for_department}</h3>
        <img src={posterImage} alt="{name}" />
        <p>{biography}</p>
      </div>
    </>
  );
};

export default IndiPersonDetails;

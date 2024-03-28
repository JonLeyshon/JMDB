import { useSelector } from "react-redux";
import { selectIndividualActorData } from "../../redux/individualActorSlice";
import { useState } from "react";

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

  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
    console.log(readMore);
  };
  return (
    <>
      <div className="biographyContainer">
        <h1>{name}</h1>
        <h3> Known for: {known_for_department}</h3>
        <img src={posterImage} alt="{name}" />
        <p
          className="biographyP"
          style={{ maxHeight: readMore ? "none" : "30vh" }}
        >
          {biography}
        </p>
        <button onClick={toggleReadMore}>
          {" "}
          {readMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </>
  );
};

export default IndiPersonDetails;

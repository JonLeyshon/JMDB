import { useSelector } from "react-redux";
import { selectIndividualActorData } from "../../redux/individualActorSlice";
import { useState, useRef, useEffect } from "react";

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
  const [backgroundGradient, setBackgroundGradient] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);

  const handleCardColour = () => {
    const randomNum = Math.floor(Math.random() * 3); // Generate a random number between 0 and 4

    // Array of gradient colors
    const gradientColors = [
      "linear-gradient(135deg, #e0f7e9, #c6f1d6)", // Subtle green gradient
      "linear-gradient(135deg, #d1e8ff, #a0c4ff)", // Subtle blue gradient
      "linear-gradient(135deg, #fff7e0, #ffe6a0)", // Subtle yellow gradient
    ];
    setBackgroundGradient(gradientColors[randomNum]);
    return;
  };

  const ref = useRef(null);

  const toggleReadMore = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    handleCardColour();
    if (ref.current) {
      setShowReadMoreButton(
        ref.current.scrollHeight > ref.current.clientHeight
      );
    }
  }, []);

  const paragraphStyles = {
    WebkitLineClamp: isOpen ? "unset" : 10,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  const posterImage = profile_path
    ? `https://image.tmdb.org/t/p/original${profile_path}`
    : "/Images/No-Image-Placeholder.png";

  return (
    <>
      <div
        className="biographyContainer"
        style={{ background: backgroundGradient }}
      >
        <div className="bioPicture">
          <img src={posterImage} alt={name} />
        </div>
        <div className="bioOverview">
          <h1>{name}</h1>
          <h3> Known for: {known_for_department}</h3>
          <p style={paragraphStyles} ref={ref}>
            {biography}
          </p>
          {showReadMoreButton && (
            <button onClick={toggleReadMore}>
              {isOpen ? "Read Less..." : "Read More..."}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default IndiPersonDetails;

import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const IndiCastActors = (props) => {
  const { name, profile_path, character, id } = props;
  const profileImage = profile_path
    ? `https://image.tmdb.org/t/p/original${profile_path}`
    : "/Images/No-Image-Placeholder.png";
  return (
    <div className="indiActorContainer">
      <Link
        to={"/details/person/" + id}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Click to see this actor's page!"
      >
        <img src={profileImage} alt={name} />
      </Link>
      <Tooltip id="my-tooltip" place="top" type="dark" effect="float" />
      <p>
        Actor: <b>{name}</b>
      </p>
      <p className="character">
        {" "}
        Character: <b>{character}</b>
      </p>
    </div>
  );
};

export default IndiCastActors;

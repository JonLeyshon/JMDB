import { Link } from "react-router-dom";
const IndiCastActors = (props) => {
  const { name, profile_path, character, id } = props;
  const profileImage = profile_path
    ? `https://image.tmdb.org/t/p/original${profile_path}`
    : "../../../public/images/No-image-Placeholder.svg.png";
  return (
    <div className="indiActorContainer">
      <Link to={"/details/person/" + id}>
        <img src={profileImage} alt={name} />
      </Link>
      <p>{name}</p>
      <p className="character">{character}</p>
    </div>
  );
};

export default IndiCastActors;

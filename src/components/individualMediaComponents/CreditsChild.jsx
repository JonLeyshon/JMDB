import { Link } from "react-router-dom";
const CreditsChild = (props) => {
  const {
    title,
    poster_path,
    character,
    media_type,
    name,
    release_date,
    first_air_date,
    id,
  } = props;
  const linkPath = media_type === "movie" ? "/details/movie/" : "/details/tv/";
  const posterImage = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : "../../../public/images/No-image-Placeholder.svg.png";
  const titleOrName = media_type === "movie" ? title : name;
  console.log(linkPath);
  console.log(id);
  return (
    <div className="singleCreditContainer">
      <Link to={linkPath + id}>
        <img src={posterImage} alt={titleOrName} />
      </Link>
      <p>{titleOrName}</p>
      <p>{character}</p>
    </div>
  );
};

export default CreditsChild;

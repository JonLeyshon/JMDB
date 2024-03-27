import { useSelector } from "react-redux";
import { selectIndividualMediaData } from "../../redux/individualMediaSlice";

const IndiTVDetails = () => {
  const TVData = useSelector(selectIndividualMediaData);
  const {
    name,
    poster_path,
    overview,
    original_language,
    vote_average,
    status,
    backdrop_path,
    first_air_date,
  } = TVData;

  const readableDate = new Date(first_air_date).toDateString();

  return (
    <>
      <div className="IndiMovieContainer">
        <div
          className="indiMoviePoster"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={name}
          />
        </div>
        <div className="indiMovieDetails">
          <h2> {name}</h2>
          <p> First Aired: {readableDate}</p>
          <h3> Overview </h3>
          <p>{overview}</p>
          <p>{vote_average}</p>
        </div>
      </div>
    </>
  );
};

export default IndiTVDetails;

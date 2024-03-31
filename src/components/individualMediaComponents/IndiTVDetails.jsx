import { useSelector } from "react-redux";
import { selectIndividualMediaData } from "../../redux/individualMediaSlice";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

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
  function convertToStars(rating) {
    const roundedRating = Math.floor(rating);
    return "★".repeat(roundedRating);
  }

  const ratingStars = convertToStars(vote_average);

  return (
    <>
      <div
        className="IndiMovieContainer"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
        }}
      >
        <div className="overlay"></div>
        <div className="IndiMovieContent">
          <div className="indiMoviePoster">
            <img
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt={name}
            />
            <p>{ratingStars}</p>
          </div>
          <div className="indiMovieDetails">
            <h2> {name}</h2>
            <p> First Aired: {readableDate}</p>
            <div className="movieListButtons">
              <FaHeart className="icon" size="2em" color="white" />
              <FaBookmark className="icon" size="2em" color="white" />
            </div>
            <h3> Overview </h3>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndiTVDetails;

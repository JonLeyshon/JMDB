import { useSelector } from "react-redux";
import { selectIndividualMediaData } from "../../redux/individualMediaSlice";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

const IndiMovieDetails = () => {
  const data = useSelector(selectIndividualMediaData);

  const {
    backdrop_path,
    genres,
    original_language,
    title,
    overview,
    poster_path,
    tagline,
    vote_average,
    release_date,
    runtime,
  } = data;
  const readableDate = new Date(release_date).toLocaleDateString();

  function convertToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h${remainingMinutes}m`;
  }

  function convertToStars(rating) {
    const roundedRating = Math.floor(rating);
    return "★".repeat(roundedRating);
  }

  const ratingStars = convertToStars(vote_average);

  const posterImage = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : "../../../public/images/No-image-Placeholder.svg.png";

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
            <img src={posterImage} />
            <p>{ratingStars}</p>
            <p>Runtime: {convertToHoursAndMinutes(runtime)}</p>
          </div>

          <div className="indiMovieDetails">
            <h2> {title}</h2>
            <p>Release Date: {readableDate},</p>
            <p>
              {genres.length >= 2 ? `${genres[0].name}, ${genres[1].name}` : ""}
            </p>
            <div className="movieListButtons">
              <FaHeart className="icon" size="2em" color="white" />
              <FaBookmark className="icon" size="2em" color="white" />
            </div>
            <i> {tagline}</i>
            <h3> Overview </h3>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndiMovieDetails;

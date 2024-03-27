import { useSelector } from "react-redux";
import { selectIndividualMediaData } from "../../redux/individualMediaSlice";

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
  } = data;
  const readableDate = new Date(release_date).toDateString();

  return (
    <>
      <div className="IndiMovieContainer">
        <div
          className="indiMoviePoster"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        >
          <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
        </div>

        <div className="indiMovieDetails">
          <h2> {title}</h2>
          <p> Release date: {readableDate}</p>
          <> {tagline}</>
          <h3> Overview </h3>
          <p>{overview}</p>
          <p>{vote_average}</p>
        </div>
      </div>
    </>
  );
};

export default IndiMovieDetails;

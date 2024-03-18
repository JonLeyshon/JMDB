import { useSelector } from "react-redux";
import { selectIndividualMovieData } from "../../redux/individualMovieSlice";

const IndiMovieDetails = (props) => {
  const data = useSelector(selectIndividualMovieData);

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

  return (
    <>
      <div className="IndiMovieContainer">
        <p> {title}</p>
        <p>{release_date}</p>

        <> {tagline}</>
      </div>
    </>
  );
};

export default IndiMovieDetails;

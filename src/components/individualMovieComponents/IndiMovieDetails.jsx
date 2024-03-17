import { useSelector } from "react-redux";
import { selectIndividualMovieData } from "../../redux/individualMovieSlice";

const IndiMovieDetails = (props) => {
  console.log(props);

  const {
    backdrop_path,
    genres,
    original_language,
    title,
    overview,
    poster_path,
    tagline,
    vote_average,
  } = props;

  return <>Movie Details</>;
};

export default IndiMovieDetails;

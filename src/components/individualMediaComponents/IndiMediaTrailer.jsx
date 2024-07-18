import { useSelector } from "react-redux";
import YouTube from "react-youtube";
import { selectIndividualMediaVideos } from "../../redux/individualMediaSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const IndiMediaTrailer = () => {
  const videos = useSelector(selectIndividualMediaVideos);

  const Trailers = videos.filter((item) => item.type === "Trailer");
  const TrailerKey = Trailers.length > 0 ? Trailers[0].key : null;

  const opts = {
    height: "234",
    width: "384",
  };

  if (Trailers.length > 0) {
    return (
      <div className="trailerContainer">
        <h2 className="indiMediaTitle">
          Trailer <FontAwesomeIcon icon={faFilm} />{" "}
        </h2>
        <div className="youtubeContainer">
          {TrailerKey && <YouTube videoId={TrailerKey} opts={opts} />}
        </div>
      </div>
    );
  }
};

export default IndiMediaTrailer;

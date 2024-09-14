import { useSelector } from "react-redux";
import { selectIndividualMediaData } from "../../redux/individualMediaSlice";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import {
  addMediaToDatabase,
  checkLikedorFavourited,
} from "../utils/usefulFunctions";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

const IndiMovieDetails = () => {
  const data = useSelector(selectIndividualMediaData);
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [towatch, setToWatch] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const likedContent = await checkLikedorFavourited(
        id,
        "movie",
        "favourite"
      );
      const towatchContent = await checkLikedorFavourited(
        id,
        "movie",
        "towatch"
      );

      if (likedContent && likedContent.length) {
        console.log("liked");
        setLiked(true);
      } else {
        setLiked(false);
      }

      if (towatchContent && towatchContent.length) {
        console.log("towatch");
        setToWatch(true);
      } else {
        setToWatch(false);
      }
    };

    fetchData();
  }, [id]);

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

  const voteAsPercentage = Math.floor(vote_average * 10);

  const posterImage = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : "/Images/No-Image-Placeholder.png";

  return (
    <>
      <div
        className="IndiMovieContainer fullscreen"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
        }}
      >
        <div className="overlay"></div>
        <div className="IndiMovieContent">
          <div className="indiMoviePoster">
            <div className="imageContainer">
              <img src={posterImage} />
              <div class="rating-circle">
                <div class="rating-content">
                  <span>{voteAsPercentage}%</span>
                </div>
              </div>
            </div>

            <p>Runtime: {convertToHoursAndMinutes(runtime)}</p>
          </div>

          <div className="indiMovieDetails">
            <h2> {title}</h2>
            <p>Release Date: {readableDate},</p>
            <p>
              {genres.length >= 2 ? `${genres[0].name}, ${genres[1].name}` : ""}
            </p>
            <div className="movieListButtons">
              <Tooltip id="heartTooltip" place="top" effect="solid"></Tooltip>
              <FaHeart
                className="icon"
                data-tooltip-id="heartTooltip"
                data-tooltip-content={
                  token
                    ? "Click to add to favourites"
                    : "Log in to add movies to your favourites"
                }
                size="2em"
                color={liked ? "#81e291" : "white"}
                onClick={() => {
                  if (token) {
                    addMediaToDatabase(id, "movie", "favourite");
                    setLiked(!liked);
                  }
                  return;
                }}
              />
              <FaBookmark
                className="icon"
                size="2em"
                color={towatch ? "#81e291" : "white"}
                data-tooltip-id="heartTooltip"
                data-tooltip-content={
                  token
                    ? "Click to add to watch list"
                    : "Log in to add movies to your watch list"
                }
                onClick={() => {
                  if (token) {
                    addMediaToDatabase(id, "movie", "towatch");
                    setToWatch(!towatch);
                  }
                  return;
                }}
              />
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

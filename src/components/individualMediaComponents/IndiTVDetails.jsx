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

const IndiTVDetails = () => {
  const TVData = useSelector(selectIndividualMediaData);
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [towatch, setToWatch] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const likedContent = await checkLikedorFavourited(id, "tv", "favourite");
      const towatchContent = await checkLikedorFavourited(id, "tv", "towatch");

      setLiked(!!(likedContent && likedContent.length));
      setToWatch(!!(towatchContent && towatchContent.length));
    };

    fetchData();
  }, [id]);

  const {
    name,
    poster_path,
    overview,
    vote_average,
    backdrop_path,
    first_air_date,
  } = TVData;

  const readableDate = new Date(first_air_date).toDateString();
  const voteAsPercentage = Math.floor(vote_average * 10);

  const posterImage = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : "/Images/No-Image-Placeholder.png";

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
          <div className="indiMoviePoster imageContainer">
            <img src={posterImage} alt={name || "TV Show Poster"} />
            <div class="rating-circle">
              <div class="rating-content">
                <span>{voteAsPercentage}%</span>
              </div>
            </div>
          </div>
          <div className="indiMovieDetails">
            <h2>{name}</h2>
            <p>First Aired: {readableDate}</p>
            <div className="movieListButtons">
              <Tooltip id="heartTooltip" place="top" effect="solid"></Tooltip>
              <FaHeart
                className="icon"
                data-tooltip-id="heartTooltip"
                data-tooltip-content={
                  token
                    ? "Click to add to favourites"
                    : "Log in to add TV shows to your favourites"
                }
                size="2em"
                color={liked ? "#81e291" : "white"}
                onClick={() => {
                  if (token) {
                    addMediaToDatabase(id, "tv", "favourite");
                    setLiked(!liked);
                  }
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
                    : "Log in to add TV shows to your watch list"
                }
                onClick={() => {
                  if (token) {
                    addMediaToDatabase(id, "tv", "towatch");
                    setToWatch(!towatch);
                  }
                }}
              />
            </div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndiTVDetails;

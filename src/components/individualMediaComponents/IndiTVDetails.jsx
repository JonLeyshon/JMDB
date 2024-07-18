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

const IndiTVDetails = () => {
  const TVData = useSelector(selectIndividualMediaData);
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [towatch, setToWatch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const likedContent = await checkLikedorFavourited(id, "tv", "favourite");
      const towatchContent = await checkLikedorFavourited(id, "tv", "towatch");

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
        setToWatch(false); // Corrected to set `towatch` state
      }
    };

    fetchData();
  }, [id]); // Include `id` in the dependency array to rerun the effect when `id` changes

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
              <FaHeart
                className="icon"
                size="2em"
                color={liked ? "#81e291" : "white"}
                onClick={() => {
                  addMediaToDatabase(id, "tv", "favourite");
                  setLiked(!liked); // Toggle liked state
                }}
              />
              <FaBookmark
                className="icon"
                size="2em"
                color={towatch ? "#81e291" : "white"}
                onClick={() => {
                  addMediaToDatabase(id, "tv", "towatch");
                  setToWatch(!towatch); // Toggle towatch state
                }}
              />
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

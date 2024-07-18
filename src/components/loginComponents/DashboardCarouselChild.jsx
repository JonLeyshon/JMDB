import React, { useEffect, useState } from "react";
import { getIndividualMediaData } from "../utils/getDataUtils";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

const DashboardCarouselChild = (props) => {
  const { content_id, media_type } = props;
  const [mediaData, setMediaData] = useState(null);
  let detailsLink;

  switch (media_type) {
    case "movie":
      detailsLink = "/details/movie/";
      break;
    case "tv":
      detailsLink = "/details/tv/";
      break;

    default:
      detailsLink = "/";
  }

  useEffect(() => {
    const fetchMediaPoster = async () => {
      const data = await getIndividualMediaData(content_id, media_type);
      setMediaData(data);
    };

    fetchMediaPoster();
  }, [content_id, media_type]);

  return (
    <div className="individualFavouritedChild">
      {mediaData ? (
        <>
          <Link to={detailsLink + content_id}>
            <img
              src={`https://image.tmdb.org/t/p/original${mediaData.poster_path}`}
              alt={mediaData.title || mediaData.name}
            />
          </Link>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default DashboardCarouselChild;

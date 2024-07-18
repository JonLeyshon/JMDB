import React, { useState, useEffect } from "react";
import { FeaturedFilmsArray } from "../utils/featuredFilmsArray";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const FeaturedFilm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomNum, setRandomNum] = useState(null);

  useEffect(() => {
    handleRandomNum();
  }, []);

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * 4));
  };

  if (randomNum === null) {
    return null; // or a loading spinner, or any other placeholder
  }

  const FeaturedFilm = FeaturedFilmsArray[randomNum];
  const { name, release_date, key, overview, genres, poster_path } =
    FeaturedFilm;

  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="featuredFilmContainer">
        <div className="info">
          <h3>{name}</h3>
          <small className="smallReleaseDate">{release_date}</small>
          <p>{genres.join(", ")}</p>
          <p>{overview}</p>
        </div>
        <div className="featuredTrailer">
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={name}
          />
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="playButton"
            onClick={openModal}
          />
        </div>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <YouTube videoId={key} opts={opts} className="youtube-player" />
        </Modal>
      )}
    </>
  );
};

export default FeaturedFilm;

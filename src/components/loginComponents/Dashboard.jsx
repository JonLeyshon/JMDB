import React, { useEffect, useState } from "react";
import LogOut from "../headerComponents/LogOut";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { responsiveLarge } from "../utils/CarouselVariables";
import DashboardCarouselChild from "./DashboardCarouselChild";
import { addMediaToDatabase } from "../utils/usefulFunctions";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [favouriteContent, setFavouriteContent] = useState([]);
  const [toWatchContent, setToWatchContent] = useState([]);
  const [update, setUpdate] = useState(false);
  const token = localStorage.getItem("token");

  const handleDetailsRetrieval = async () => {
    const headers = {
      "Content-Type": "application/json",
      token: token,
    };
    try {
      const response = await axios.get("http://localhost:3000/read", {
        headers,
      });
      if (response.status === 200) {
        setUserDetails(response.data.user);
      } else {
        console.log("Error retrieving details, check API");
      }
    } catch (error) {
      console.error("Error retrieving details:", error);
    }
  };

  const handleFavouritedRetrieval = async () => {
    const headers = {
      "Content-Type": "application/json",
      token: token,
    };
    try {
      const response = await axios.get(
        "http://localhost:3000/getFavouritedContent",
        { headers }
      );
      const content = response.data.map((item) => ({
        content_id: item.content_id,
        media_type: item.media_type,
      }));
      setFavouriteContent(content);
    } catch (error) {
      console.error("Error retrieving favourites ", error);
    }
  };

  const handleToWatchRetrieval = async () => {
    const headers = {
      "Content-Type": "application/json",
      token: token,
    };
    try {
      const response = await axios.get("http://localhost:3000/getToWatch", {
        headers,
      });
      const content = response.data.map((item) => ({
        content_id: item.content_id,
        media_type: item.media_type,
      }));
      setToWatchContent(content);
    } catch (error) {
      console.error("Error retrieving to-watch content ", error);
    }
  };

  useEffect(() => {
    handleDetailsRetrieval();
    handleFavouritedRetrieval();
    handleToWatchRetrieval();
  }, [update]);

  const handleButtonClick = async (content_id, media_type, type) => {
    await addMediaToDatabase(content_id, media_type, type);
    setUpdate((prevUpdate) => !prevUpdate);
  };

  const renderFavouriteContent = () => {
    return (
      <Carousel responsive={responsiveLarge}>
        {favouriteContent.map((item) => (
          <div
            key={item.content_id + item.media_type}
            className="carousel-item"
          >
            <DashboardCarouselChild {...item} />
            <button
              onClick={() =>
                handleButtonClick(item.content_id, item.media_type, "favourite")
              }
            >
              X
            </button>
          </div>
        ))}
      </Carousel>
    );
  };

  const renderToWatchContent = () => {
    return (
      <Carousel responsive={responsiveLarge}>
        {toWatchContent.map((item) => (
          <div
            key={item.content_id + item.media_type}
            className="carousel-item"
          >
            <DashboardCarouselChild {...item} />
            <button
              onClick={() =>
                handleButtonClick(item.content_id, item.media_type, "towatch")
              }
            >
              X
            </button>
          </div>
        ))}
      </Carousel>
    );
  };

  return (
    <div className="dashboard">
      <div className="personalInfoContainer">
        <img src="../../public/images/avatar.png" alt="User Avatar" />
        <h2>
          {userDetails
            ? `${userDetails.first_name} ${userDetails.second_name}`
            : "Loading..."}
        </h2>
      </div>

      <div className="favouriteContent">
        <h2 className="dashboardTitle">
          Favourite Content <FaHeart />
        </h2>
        {favouriteContent.length === 0 ? (
          <p>No favourite content yet, add some!</p>
        ) : (
          renderFavouriteContent()
        )}
      </div>

      <div className="toWatchContent">
        <h2 className="dashboardTitle">
          To Watch Content
          <FaBookmark />{" "}
        </h2>
        {toWatchContent.length === 0 ? (
          <p>No content to watch yet, add some!</p>
        ) : (
          renderToWatchContent()
        )}
      </div>

      <LogOut />
    </div>
  );
};

export default Dashboard;

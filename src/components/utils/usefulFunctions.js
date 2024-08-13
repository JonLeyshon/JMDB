import { faV } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { url } from "./config";

export const addMediaToDatabase = async (
  mediaID,
  mediaType,
  favouriteOrToWatch
) => {
  const token = localStorage.getItem("token");

  const body = {
    content_id: mediaID,
    media_type: mediaType,
    favourite_or_towatch: favouriteOrToWatch,
  };

  const headers = {
    "Content-Type": "application/json",
    token: token,
  };

  try {
    const { data } = await axios.post(`${url}/addContent`, body, { headers });
    console.log("Content added successfully:", data);
  } catch (error) {
    console.log("Error adding content to database", error);
  }
};

export const checkLikedorFavourited = async (
  mediaID,
  mediaType,
  favourite_or_towatch
) => {
  const token = localStorage.getItem("token");

  const params = {
    content_id: mediaID,
    media_type: mediaType,
    favourite_or_towatch: favourite_or_towatch,
  };

  const headers = {
    "Content-Type": "application/json",
    token: token,
  };

  console.log(params, headers);
  try {
    const { data } = await axios.get(`${url}/checkContent`, {
      params,
      headers,
    });
    return data;
  } catch (error) {
    console.log("Error checking content in database", error);
    return null; // Return null in case of error to avoid undefined results
  }
};

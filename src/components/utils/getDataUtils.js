import axios from "axios";
import { APIKEY } from "./miscVariables";

export const getMoviesBySearch = async (userQuery) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${userQuery}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization: APIKEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.log("You have an error with API", error);
  }
};

export const getPopularData = async (selection) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${selection}/popular`,
      {
        headers: {
          Authorization: APIKEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.log("You have an error with API", error);
  }
};

export const getTopRatedData = async (selection) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${selection}/top_rated`,
      {
        headers: {
          Authorization: APIKEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.log("You have an error with API", error);
  }
};
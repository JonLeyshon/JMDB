import axios from "axios";
import { APIKEY } from "./miscVariables";

export const getMoviesBySearch = async (userQuery, resultType) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${resultType}?query=${userQuery}&include_adult=false&language=en-US&page=1`,
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

export const getIndividualMediaData = async (id, selection) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${selection}/${id}`,
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

export const getIndividualCast = async (id, selection) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${selection}/${id}/credits`,
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

export const getCreditsData = async (id, selection) => {
  try {
    const { data } = await axios.get(
      `
     
https://api.themoviedb.org/3/person/${id}/${selection}_credits`,
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

export const getReviewsData = async (id, selection) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${selection}/${id}/reviews`,
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

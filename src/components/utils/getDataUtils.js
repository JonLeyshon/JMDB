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
  console.log(APIKEY);
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

// export const getFeaturedFilm = async () => {
//   const randomNum = Math.floor(Math.random() * 19);
//   try {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/movie/popular`,
//       {
//         headers: {
//           Authorization: APIKEY,
//         },
//       }
//     );

//     return data.results[randomNum];
//   } catch (error) {
//     console.log("You have an error with API", error);
//   }
// };

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

export const getIndividualTvData = async (id) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/credits`,
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

export const getIndividualMediaVideos = async (id, selection) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${selection}/${id}/videos`,
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

export const getBanner = async () => {
  try {
    const pMResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        headers: {
          Authorization: APIKEY,
        },
      }
    );

    const pTVResponse = await axios.get(
      `https://api.themoviedb.org/3/tv/popular`,
      {
        headers: {
          Authorization: APIKEY,
        },
      }
    );

    const combinedData = [
      ...pMResponse.data.results,
      ...pTVResponse.data.results,
    ];
    return combinedData;
  } catch (error) {
    console.log("You have an error with API", error);
    return [];
  }
};

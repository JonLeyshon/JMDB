import { useSelector } from "react-redux";

import {
  selectMovieSearchData,
  selectResultType,
} from "../../redux/movieSearchSlice";
import UserSearchMovie from "./UserSearchMovie";
import UserSearchTV from "./UserSearchTV";
import UserSearchPerson from "./UserSearchPerson";

const UserSearchContainer = () => {
  const uSData = useSelector(selectMovieSearchData);
  const mediaType = useSelector(selectResultType);
  if (uSData.length === 0) {
    return <p> We Found no results try another search</p>;
  }
  if (uSData && uSData.length > 0) {
    if (mediaType === "movie") {
      return uSData.map((item) => {
        return <UserSearchMovie {...item} />;
      });
    } else if (mediaType === "tv") {
      return uSData.map((item) => {
        return <UserSearchTV {...item} />;
      });
    } else if (mediaType === "person") {
      return uSData.map((item) => {
        return <UserSearchPerson {...item} />;
      });
    } else {
      return <> you messed up</>;
    }
  }
};

export default UserSearchContainer;

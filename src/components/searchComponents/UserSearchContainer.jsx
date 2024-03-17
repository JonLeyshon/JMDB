import { useSelector } from "react-redux";

import UserSearchChild from "./UserSearchChild";
import { selectMovieSearchData } from "../../redux/movieSearchSlice";

const UserSearchContainer = () => {
  const uSData = useSelector(selectMovieSearchData);
  console.log(uSData);

  if (uSData && uSData.length > 0) {
    return (
      <>
        {uSData.map((item) => {
          return <UserSearchChild {...item} />;
        })}
      </>
    );
  }
};

export default UserSearchContainer;

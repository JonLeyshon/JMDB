import { useSelector } from "react-redux";
import { selectMovieSearchData } from "../redux/movieSearchSlice";
import UserSearchChild from "./UserSearchChild";

const UserSearchContainer = () => {
  const uSData = useSelector(selectMovieSearchData);

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

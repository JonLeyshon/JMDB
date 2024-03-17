import SearchControls from "./SearchControls";
import UserSearch from "./UserSearch";
import UserSearchContainer from "./UserSearchContainer";
import "../../css/movieSearch.css";

const SearchResultsPage = () => {
  return (
    <>
      <UserSearch />
      <SearchControls />
      <UserSearchContainer />
    </>
  );
};

export default SearchResultsPage;

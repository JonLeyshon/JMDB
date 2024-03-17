import SearchControls from "./SearchControls";
import UserSearch from "./UserSearch";
import UserSearchContainer from "./UserSearchContainer";

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

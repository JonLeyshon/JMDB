import SearchControls from "../searchComponents/SearchControls";
import UserSearch from "../searchComponents/UserSearch";
import UserSearchContainer from "../searchComponents/UserSearchContainer";

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

import UserSearch from "../searchComponents/UserSearch";
import PopularContainer from "../homeComponents/PopularContainer";
import TopRatedContainer from "../homeComponents/topRatedContainer";
const Home = () => {
  return (
    <>
      <UserSearch />
      <PopularContainer />
      <TopRatedContainer />
    </>
  );
};

export default Home;

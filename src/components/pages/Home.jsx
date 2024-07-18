import UserSearch from "../searchComponents/UserSearch";
import PopularCarousel from "../homeComponents/PopularCarousel";
import TopRatedCarousel from "../homeComponents/topRatedCarousel";
import Banner from "../homeComponents/Banner";
import FeaturedFilm from "../homeComponents/FeaturedFilm";
const Home = () => {
  return (
    <>
      <Banner />
      <div className="paddedMain">
        <PopularCarousel />
        <TopRatedCarousel />
        <FeaturedFilm />
      </div>
    </>
  );
};

export default Home;

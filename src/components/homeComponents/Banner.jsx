import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBanner } from "../utils/getDataUtils";
import { setBanner, selectBanner } from "../../redux/BannerSlice";
import UserSearch from "../searchComponents/UserSearch";

const Banner = () => {
  const dispatch = useDispatch();
  const bannerData = useSelector(selectBanner);
  const [randomNum, setRandomNum] = useState(null);

  useEffect(() => {
    const fetchBannerData = async () => {
      const data = await getBanner();
      dispatch(setBanner(data));
      setRandomNum(Math.floor(Math.random() * 40));
    };

    fetchBannerData();
  }, [dispatch]);

  if (
    !bannerData ||
    !bannerData[randomNum] ||
    !bannerData[randomNum].backdrop_path
  ) {
    //loading default banner
    return (
      <div className="homepageBanner">
        <div className="overlay"></div>
        <div className="bannerContent">
          <h1> Welcome to JMDB </h1>
          <h4> Enjoy Info on over a million films</h4>
          <UserSearch />
        </div>
      </div>
    );
  }

  return (
    <div
      className="homepageBanner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${bannerData[randomNum].backdrop_path})`,
      }}
    >
      <div className="overlay"></div>
      <div className="bannerContent">
        <h1> Welcome to JMDB </h1>
        <h4> Enjoy Info on over a million films</h4>
        <UserSearch />
      </div>
    </div>
  );
};

export default Banner;

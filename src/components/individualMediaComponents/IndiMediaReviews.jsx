import { useSelector } from "react-redux";
import { selectIndividualMediaReviews } from "../../redux/individualMediaSlice";
import ReviewChild from "./IndiMediaReviewChild";
import { useState } from "react";

const IndiMediaReviews = () => {
  const reviewData = useSelector(selectIndividualMediaReviews);
  const [reviewNum, setReviewNum] = useState(0);
  function convertToStars(rating) {
    const roundedRating = Math.floor(rating);
    return "★".repeat(roundedRating);
  }

  if (reviewData && reviewData.length > 0) {
    const { username, avatar_path, rating } =
      reviewData[reviewNum].author_details;
    const { content, created_at } = reviewData[reviewNum];
    const avatarImage = avatar_path
      ? `https://image.tmdb.org/t/p/original${avatar_path}`
      : "../../../public/images/avatar.png";
    const readabledate = new Date(created_at).toDateString();
    const ratingStars = convertToStars(rating);

    const handleNextReview = () => {
      if (reviewNum < reviewData.length - 1) {
        setReviewNum(reviewNum + 1);
      } else {
        setReviewNum(0);
      }
    };
    return (
      <>
        <h2>Reviews:</h2>
        <div className="singleReview">
          <div className="authorDetails">
            <h3>{username}</h3>
            <img src={avatarImage} alt="Avatar" />
          </div>
          <div className="reviewDetails">
            <small>Created: {readabledate}</small>
            <p>{ratingStars}</p>
            <p className="content-text"> {content}</p>
          </div>
          {reviewData.length > 1 && (
            <button className="nextReview" onClick={handleNextReview}>
              View Next Review
            </button>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <h2> Reviews:</h2>
      <p> No reviews currently! </p>
    </>
  );
};

export default IndiMediaReviews;

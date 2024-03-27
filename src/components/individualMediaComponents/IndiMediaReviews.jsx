import { useSelector } from "react-redux";
import { selectIndividualMediaReviews } from "../../redux/individualMediaSlice";
import ReviewChild from "./IndiMediaReviewChild";

const IndiMediaReviews = () => {
  const reviewData = useSelector(selectIndividualMediaReviews);
  if (reviewData && reviewData.length > 0) {
    return (
      <>
        <h2> Reviews</h2>
        <div className="reviewsContainer">
          {reviewData.map((item) => {
            return <ReviewChild {...item} />;
          })}
        </div>
        <button> Next review</button>
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

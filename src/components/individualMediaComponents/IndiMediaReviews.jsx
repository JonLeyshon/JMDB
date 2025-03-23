import { useSelector } from "react-redux";
import { selectIndividualMediaReviews } from "../../redux/individualMediaSlice";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const IndiMediaReviews = () => {
  const reviewData = useSelector(selectIndividualMediaReviews);
  const [reviewNum, setReviewNum] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);

  function convertToStars(rating) {
    const roundedRating = Math.floor(rating);
    return "★".repeat(roundedRating);
  }

  const reviewParagraphStyles = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  const ref = useRef(null);

  const handleNextReview = () => {
    setIsOpen(false);
    if (reviewNum < reviewData.length - 1) {
      setReviewNum(reviewNum + 1);
    } else {
      setReviewNum(0);
    }
  };

  const toggleReadMore = () => {
    setIsOpen((prevState) => {
      const newIsOpen = !prevState;
      if (ref.current) {
        setShowReadMoreButton(
          ref.current.scrollHeight > ref.current.clientHeight
        );
      }
      return newIsOpen;
    });
  };

  useEffect(() => {
    if (ref.current) {
      setShowReadMoreButton(
        ref.current.scrollHeight > ref.current.clientHeight
      );
    }
  }, [reviewNum]);

  if (reviewData && reviewData.length > 0) {
    const { username, avatar_path, rating } =
      reviewData[reviewNum].author_details;
    const { content, created_at } = reviewData[reviewNum];
    const avatarImage = avatar_path
      ? `https://image.tmdb.org/t/p/original${avatar_path}`
      : "/Images/avatar.png";
    const readabledate = new Date(created_at).toDateString();
    const ratingStars = convertToStars(rating);

    return (
      <>
        <h2 className="indiMediaTitle">
          Reviews <FontAwesomeIcon icon={faStar} />
        </h2>

        <div className="singleReview">
          <div className="authorDetails">
            <h3>{username}</h3>
            <img src={avatarImage} alt="Avatar" />
          </div>
          <div className="reviewDetails">
            <small>Created: {readabledate}</small>
            <p>{ratingStars}</p>
            <p
              className="content-text"
              style={isOpen ? null : reviewParagraphStyles}
              ref={ref}
            >
              {content}
            </p>

            {showReadMoreButton && (
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {isOpen ? "Read Less..." : "Read More..."}
              </button>
            )}
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

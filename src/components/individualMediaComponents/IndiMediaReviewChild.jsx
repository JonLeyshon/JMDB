const ReviewChild = (props) => {
  const { username, avatar_path, rating } = props.author_details;
  const { content, created_at } = props;

  const avatarImage = avatar_path
    ? `https://image.tmdb.org/t/p/original${avatar_path}`
    : "../../../public/images/avatar.png";

  const readabledate = new Date(created_at).toDateString();
  return (
    <div className="singleReview">
      <div className="authorDetails">
        <h3>{username}</h3>
        <img src={avatarImage} />
      </div>
      <div className="reviewDetails">
        <small>Created: {readabledate}</small>
        <p>{rating}</p>
        <p> {content}</p>
      </div>
    </div>
  );
};

export default ReviewChild;

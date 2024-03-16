const TopRatedChild = (props) => {
  const { id, title, overview, poster_path, vote_average } = props;
  const image = `https://image.tmdb.org/t/p/original${poster_path}`;
  return (
    <div className="movieChild">
      <img src={image} />
    </div>
  );
};

export default TopRatedChild;

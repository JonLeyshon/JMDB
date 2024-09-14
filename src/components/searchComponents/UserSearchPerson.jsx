import { Link } from "react-router-dom";

const UserSearchPerson = (props) => {
  const { name, known_for_department, profile_path, id, known_for } = props;
  const posterImage = profile_path
    ? `https://image.tmdb.org/t/p/original${profile_path}`
    : "/Images/No-Image-Placeholder.png";
  return (
    <>
      <div className="searchResultChild">
        <Link to={"/details/person/" + id}>
          <img src={posterImage} alt={`${name} poster `} />
        </Link>
        <div className="movieDetails">
          <h3>{name}</h3>

          <p>Department: {known_for_department}</p>
          {known_for && known_for.length > 0 && (
            <ul>
              {known_for.map((item) => (
                // Ensure a unique key for each list item
                <li>{item.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default UserSearchPerson;

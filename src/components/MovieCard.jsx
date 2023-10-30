import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Context } from "../context/Context";

const MovieCard = ({
  title,
  overview,
  rate,
  popularity,
  vote_average,
  name,
  poster_path,
  id,
  media_type,
  profile_path,
}) => {
  console.log(overview);
  const { IMG_URL } = useContext(Context);
  const navigate = useNavigate();
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else if (vote < 6) {
      return "red";
    } else {
      return "";
    }
  };
  return (
    <Card
      className="movie"
      onClick={() => navigate(`/detail/${media_type}/${id}`)}
    >
      <Card.Img
        variant="top"
        src={
          poster_path
            ? IMG_URL + poster_path
            : profile_path
            ? IMG_URL + profile_path
            : defaultImage
        }
      />
      {overview ? (
        <div className="movie-over">
          <p>{overview}</p>
        </div>
      ) : null}

      <Card.Footer className="d-flex  justify-content-between p-2 text-white">
        <Card.Title>{title || name}</Card.Title>
        <Card.Title className={`tag ${getVoteClass(vote_average)}`}>
          {vote_average ? vote_average.toFixed(1) : popularity.toFixed(1)}
        </Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default MovieCard;

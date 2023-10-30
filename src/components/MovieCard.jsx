import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Context } from "../context/Context";

const MovieCard = ({ movie }) => {
  const {
    title,
    overview,
    rate,
    popularity,
    name,
    poster_path,
    id,
    media_type,
    profile_path,
  } = movie;

  const { IMG_URL } = useContext(Context);
  const navigate = useNavigate();
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

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

      <Card.Footer className="d-flex  justify-content-between p-2 text-white">
        <Card.Title>{title || name}</Card.Title>
        <Card.Title>{rate || popularity}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default MovieCard;

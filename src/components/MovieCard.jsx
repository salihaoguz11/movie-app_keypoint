import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Context } from "../context/Context";

const MovieCard = ({ movie }) => {
  const { title, overview, poster_path, id, media_type } = movie;
  const { IMG_URL } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Card
      className="movie"
      onClick={() => navigate(`/detail/${media_type}/${id}`)}
    >
      <Card.Img variant="top" src={IMG_URL + poster_path} />

      <Card.Footer className="d-flex  justify-content-between p-2 text-white">
        <Card.Title>{title}</Card.Title>
        <Card.Title>rate</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default MovieCard;

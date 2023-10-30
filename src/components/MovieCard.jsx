import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Context } from "../context/Context";

const MovieCard = ({ movie }) => {
  const { title, overview, poster_path, id } = movie;
  const { IMG_URL } = useContext(Context);

  return (
    <Card className="movie">
      <Card.Img variant="top" src={IMG_URL + poster_path} />

      <Card.Footer className="d-flex  justify-content-between p-2 text-white">
        <Card.Title>{title}</Card.Title>
        <Card.Title>rate</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default MovieCard;

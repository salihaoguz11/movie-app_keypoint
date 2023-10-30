import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const MovieCard = () => {
  return (
    <Card className="movie">
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>

      <Card.Footer className="d-flex  justify-content-between p-2 text-white">
        <Card.Title>name</Card.Title>
        <Card.Title>rate</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default MovieCard;

import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../context/Context";
import MovieCard from "./MovieCard";

const Cards = () => {
  const { movies, IMG_URL } = useContext(Context);

  return (
    <div className="row d-flex ">
      {movies?.map((item) => {
        //get movies and return each item by using map method
        return (
          <Container className="col-12  col-sm-6 col-md-4 col-lg-3 card mb-4 ms-4 bg-dark">
            <MovieCard {...item} key={item.id} IMG_URL={IMG_URL} />
          </Container>
        );
      })}
    </div>
  );
};

export default Cards;

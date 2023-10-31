import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../context/Context";
import MovieCard from "./MovieCard";

const Cards = () => {
  const { movies } = useContext(Context);

  return (
    <div className="row d-flex ">
      {movies?.map((item) => {
        //get movies and return each item by using map method
        return (
          <Container className="col-12  col-sm-6 col-md-4 col-lg-3  mb-4 ms-4    ">
            <MovieCard {...item} key={item.id} />
          </Container>
        );
      })}
    </div>
  );
};

export default Cards;

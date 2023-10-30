import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../context/Context";
import MovieCard from "./MovieCard";

const Cards = () => {
  const { search, setSearch, getData, movies, IMG_URL } = useContext(Context);

  return (
    <div className="row d-flex ">
      {movies?.map((movie) => {
        return (
          <Container className="col-12  col-sm-6 col-md-4 col-lg-3 card mb-4 ms-4 bg-dark">
            <MovieCard movie={movie} key={movie.id} IMG_URL={IMG_URL} />
          </Container>
        );
      })}
    </div>
  );
};

export default Cards;

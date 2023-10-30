import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../context/Context";

import NavbarCom from "../components/NavbarCom";

const Detail = () => {
  const { id, media_type } = useParams();
  const { API_KEY } = useContext(Context);
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${media_type}/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  return (
    <div>
      <NavbarCom />
    </div>
  );
};

export default Detail;

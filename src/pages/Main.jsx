import React from "react";

import NavbarCom from "../components/NavbarCom";
import SearchBar from "../components/SearchBar";
import { Container } from "react-bootstrap";
import filmImage from "../helper/img/film.jpg";

const Main = () => {
  return (
    <div
      className="min-vh-100"
      style={{
        background: `url(${filmImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <NavbarCom />
      <SearchBar />
    </div>
  );
};

export default Main;

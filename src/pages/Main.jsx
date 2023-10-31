import React from "react";

import NavbarCom from "../components/NavbarCom";
import SearchBar from "../components/SearchBar";

import filmImage from "../helper/img/film.jpg";

import Cards from "../components/Cards";

const Main = () => {
  return (
    <div
      className="min-vh-100 "
      style={{
        background: `url(${filmImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <NavbarCom />
      <SearchBar className="mt-5" />
      <Cards />
    </div>
  );
};

export default Main;

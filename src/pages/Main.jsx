import { useContext } from "react";
import { Context } from "../context/Context";

import NavbarCom from "../components/NavbarCom";
import SearchBar from "../components/SearchBar";
import { Container } from "react-bootstrap";
import filmImage from "../helper/img/film.jpg";

import Cards from "../components/Cards";
import AlertCom from "../components/AlertCom";

const Main = () => {
  const { movies } = useContext(Context);
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
      {movies.length ? <Cards /> : <AlertCom />}
    </div>
  );
};

export default Main;

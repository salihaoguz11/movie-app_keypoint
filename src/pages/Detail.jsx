import React from "react";
import { Link, useParams } from "react-router-dom";

import NavbarCom from "../components/NavbarCom";

const Detail = () => {
  const { id, media_type } = useParams();
  return (
    <div>
      <NavbarCom />
    </div>
  );
};

export default Detail;

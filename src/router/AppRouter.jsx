import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Detail from "../pages/Detail";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />

        <Route path="/detail/:media_type/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default AppRouter;

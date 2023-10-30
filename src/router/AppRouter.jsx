import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default AppRouter;

import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <div>
      <Route path="login" element={<Login />} />
    </div>
  );
};

export default AppRouter;

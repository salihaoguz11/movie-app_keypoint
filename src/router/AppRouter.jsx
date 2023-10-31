import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Define routes for different pages or components. */}
        <Route path="/" element={<Login />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/main" element={<Main />} />
          <Route path="/detail/:media_type/:id" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;

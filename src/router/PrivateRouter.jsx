import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";

const PrivateRouter = () => {
  const { user } = useContext(Context);
  // if there is user you can go to children but if not you navigate to login page.
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;

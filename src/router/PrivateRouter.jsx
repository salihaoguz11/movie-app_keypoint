import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";

const PrivateRouter = () => {
  const { user } = useContext(Context);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;

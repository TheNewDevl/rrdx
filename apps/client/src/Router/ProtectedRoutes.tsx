import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  //TODO: Check if user is logged in using redux state
  if (!true) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return <Outlet />;
};

/** Created by carlos on 08/01/2023 */

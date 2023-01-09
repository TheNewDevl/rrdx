import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { selectAuth } from "../store/features/auth";

export const ProtectedRoutes = () => {
  const token = useAppSelector(selectAuth).token;
  //TODO: Check if user is logged in using redux state
  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return <Outlet />;
};

/** Created by carlos on 08/01/2023 */

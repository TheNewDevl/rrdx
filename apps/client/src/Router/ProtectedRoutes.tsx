import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { selectAuth } from "../store/features/auth";
import { isJWT } from "@rrdx-mono/functions";
import { selectUser } from "../store/features/user";

/**
 * This component is used to protect routes
 * It will check if store has a valid token and user data and if so it will render the children
 * If not it will redirect to login page
 */
export const ProtectedRoutes = () => {
  const token = useAppSelector(selectAuth).token;
  const user = useAppSelector(selectUser).user;

  if (token && isJWT(token) && user) {
    return <Outlet />;
  }
  return <Navigate to={"/login"} replace={true} />;
};

/** Created by carlos on 08/01/2023 */

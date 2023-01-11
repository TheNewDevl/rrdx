import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { selectAuth } from "../store/features/auth";
import { isJWT } from "@rrdx-mono/functions";
import { selectUser } from "../store/features/user";

export const ProtectedRoutes = () => {
  const token = useAppSelector(selectAuth).token;
  const user = useAppSelector(selectUser).user;
  //TODO: Check if user is logged in using redux state
  if (token && isJWT(token) && user) {
    return <Outlet />;
  }
  return <Navigate to={"/login"} replace={true} />;
};

/** Created by carlos on 08/01/2023 */

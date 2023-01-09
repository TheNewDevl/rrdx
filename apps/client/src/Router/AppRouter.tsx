import { Route, Routes } from "react-router-dom";
import { Home } from "../Views/Home/Home";
import { Profile } from "../Views/Profile/Profile";
import { Login } from "../Views/Login/Login";
import { Error } from "../Views/Error/Error";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path={"/profile"} element={<Profile />} />
      </Route>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/"} element={<Home />} />
      <Route path={"*"} element={<Error />} />
    </Routes>
  );
};

/** Created by carlos on 08/01/2023 */

import style from "./Home.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchOrUpdateAuth } from "../../store/features/auth";
import { fetchOrUpdateUser, selectUser } from "../../store/features/user";
import { useEffect } from "react";

interface HomeProps {}

export const Home = ({}: HomeProps) => {
  const user = useAppSelector(selectUser);
  const credentials = {
    email: "tony@stark.com",
    password: "password123",
  };
  const upCredentials = {
    firstName: "ony",
    lastName: "tark",
  };
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className={style.Home}>
      Home view
      <button onClick={() => dispatch(fetchOrUpdateAuth(credentials))}>Login</button>
      <button onClick={() => dispatch(fetchOrUpdateUser())}>get user</button>
      <button onClick={() => dispatch(fetchOrUpdateUser(upCredentials))}>update user</button>
    </div>
  );
};

/** Created by carlos on 08/01/2023 */

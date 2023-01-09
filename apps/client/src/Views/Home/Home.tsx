import style from "./Home.module.scss";
import { useAppDispatch } from "../../store/hooks";
import { fetchOrUpdateAuth } from "../../store/features/auth";

interface HomeProps {}

export const Home = ({}: HomeProps) => {
  const credentials = {
    email: "tony@stark.com",
    password: "password1234",
  };
  const dispatch = useAppDispatch();

  return (
    <div className={style.Home}>
      Home view
      <button onClick={() => dispatch(fetchOrUpdateAuth(credentials))}>Login</button>
    </div>
  );
};

/** Created by carlos on 08/01/2023 */

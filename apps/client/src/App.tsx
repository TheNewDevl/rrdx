import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router/AppRouter";
import { Footer, Header } from "@rrdx-mono/ui";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { authSetToken, selectAuth } from "./store/features/auth";
import { useEffect } from "react";
import { fetchOrUpdateUser } from "./store/features/user";

function App() {
  const remember = useAppSelector(selectAuth).remember;
  const dispatch = useAppDispatch();
  useEffect(() => {
    //if user checked "remember me" checkbox and a token is present in local storage
    //set the token in the store and fetch user data
    if (remember && localStorage.getItem("token")) {
      dispatch(authSetToken(JSON.parse(localStorage.getItem("token")!)));
      dispatch(fetchOrUpdateUser());
    }
  }, [remember]);
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

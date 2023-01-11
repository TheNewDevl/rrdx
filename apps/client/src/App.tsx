import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router/AppRouter";
import { Footer, Header } from "@rrdx-mono/ui";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { authSetToken, selectAuth } from "./store/features/auth";
import { useEffect } from "react";
import { fetchOrUpdateUser, selectUser } from "./store/features/user";
import { logout } from "./store/features/auth";
import { RequestStateEnum } from "@rrdx-mono/types";

function App() {
  const { remember, status: authStatus } = useAppSelector(selectAuth);
  const { status: userStatus, user } = useAppSelector(selectUser);

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
      <Header
        isLoggedIn={!!user}
        isLoading={authStatus === RequestStateEnum.PENDING || userStatus === RequestStateEnum.PENDING}
        profileLinkNode={user?.firstName}
        onLogoutClick={() => dispatch(logout)}
      />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

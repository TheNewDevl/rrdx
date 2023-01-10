import { Button, FormContainer, Input } from "@rrdx-mono/ui";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { LoginBody } from "@rrdx-mono/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { authRemember, fetchOrUpdateAuth, selectAuth } from "../../store/features/auth";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../store/features/user";

export const Login = () => {
  const [credentials, setCredentials] = useState<LoginBody>({ email: "", password: "" });
  const { remember, token, status: authStatus, error: authError } = useAppSelector(selectAuth);
  const { user, status: userStatus, error: userError } = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, email: e.target.value });
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, password: e.target.value });
  };
  const handleRemember = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("remember", JSON.stringify(e.target.checked));
    dispatch(authRemember(e.target.checked));
  };
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(fetchOrUpdateAuth(credentials));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (token && user) {
      navigate("/profile", { replace: true });
    }
  }, [token, user]);

  return (
    <main style={{ flex: 1, backgroundColor: "#12002b" }}>
      <FormContainer title={"Sign In"}>
        <Input value={credentials.email} onChange={handleEmail} type={"text"} label={"Username"} />
        <Input value={credentials.password} onChange={handlePassword} type={"password"} label={"Password"} />
        <Input checked={remember} onChange={handleRemember} type={"checkbox"} label={"Remember me"} />
        <Button text={"Sign In"} onClick={handleSubmit} />
      </FormContainer>
    </main>
  );
};

/** Created by carlos on 08/01/2023 */

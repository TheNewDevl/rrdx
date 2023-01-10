import { Button, FormContainer, Input } from "@rrdx-mono/ui";
import { ChangeEvent, useState } from "react";
import { LoginBody } from "@rrdx-mono/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { authRemember, selectAuth } from "../../store/features/auth";

export const Login = () => {
  const [credentials, setCredentials] = useState<LoginBody>({ email: "", password: "" });
  const remember = useAppSelector(selectAuth).remember;
  const dispatch = useAppDispatch();

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, email: event.target.value });
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, password: event.target.value });
  };
  const handleRemember = (event: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("remember", JSON.stringify(event.target.checked));
    dispatch(authRemember(event.target.checked));
  };

  const handleSubmit = () => {};

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

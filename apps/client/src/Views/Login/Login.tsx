import { Button, ErrorParagraph, FormContainer, Input } from "@rrdx-mono/ui";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { CredentialErrors, LoginBody } from "@rrdx-mono/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { authRemember, fetchOrUpdateAuth, selectAuth } from "../../store/features/auth";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../store/features/user";

export const Login = () => {
  const [credentials, setCredentials] = useState<LoginBody>({ email: "", password: "" });
  const { remember, token, status: authStatus, error: authError } = useAppSelector(selectAuth);
  const { user, status: userStatus, error: userError } = useAppSelector(selectUser);
  const [error, setError] = useState<CredentialErrors>({});
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
    setError({} as CredentialErrors);
    const isValidCredentials = credentialsValidator(credentials);
    if (isValidCredentials) {
      dispatch(fetchOrUpdateAuth(credentials));
    }
  };
  const credentialsValidator = (credentials: LoginBody) => {
    const { password, email } = credentials;
    let validity = true;
    if (!email || !email.trim().match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
      setError({ ...error, email: "Invalid email" });
      validity = false;
    }
    if (!password || password.length < 8) {
      setError({ ...error, password: "Password must be at least 8 characters long" });
      validity = false;
    }
    return validity;
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
        {error.email && <ErrorParagraph>{error.email}</ErrorParagraph>}
        <Input value={credentials.password} onChange={handlePassword} type={"password"} label={"Password"} />
        {error.password && <ErrorParagraph>{error.password}</ErrorParagraph>}
        <Input checked={remember} onChange={handleRemember} type={"checkbox"} label={"Remember me"} />
        {(authError || userError) && <ErrorParagraph>{authError ?? userError ?? ""}</ErrorParagraph>}
        <Button children={"Sign In"} onClick={handleSubmit} />
      </FormContainer>
    </main>
  );
};

/** Created by carlos on 08/01/2023 */

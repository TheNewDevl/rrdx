import { Button, ErrorParagraph, FormContainer, Input, Loader } from "@rrdx-mono/ui";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { CredentialErrors, LoginBody, RequestStateEnum } from "@rrdx-mono/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { authRemember, fetchOrUpdateAuth, selectAuth } from "../../store/features/auth";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../store/features/user";
import { credentialsValidator, setLsItem } from "@rrdx-mono/functions";

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
    setLsItem("remember", e.target.checked);
    dispatch(authRemember(e.target.checked));
  };
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError({} as CredentialErrors);
    const { passwordError, emailError } = credentialsValidator(credentials);
    if (!passwordError && !emailError) {
      dispatch(fetchOrUpdateAuth(credentials));
    }
    setError({ passwordError, emailError });
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
        <ErrorParagraph>{error.emailError && error.emailError}</ErrorParagraph>
        <Input value={credentials.password} onChange={handlePassword} type={"password"} label={"Password"} />
        <ErrorParagraph>{error.passwordError && error.passwordError}</ErrorParagraph>
        <Input checked={remember} onChange={handleRemember} type={"checkbox"} label={"Remember me"} />
        <ErrorParagraph>{authError ?? userError ?? ""}</ErrorParagraph>
        <Button
          children={
            authStatus === RequestStateEnum.PENDING || userStatus === RequestStateEnum.PENDING ? (
              <Loader size={20} />
            ) : (
              "Sign In"
            )
          }
          onClick={handleSubmit}
        />
      </FormContainer>
    </main>
  );
};

/** Created by carlos on 08/01/2023 */

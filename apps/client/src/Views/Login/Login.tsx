import { Button, ErrorParagraph, FormContainer, Input, Loader } from "@rrdx-mono/ui";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { CredentialErrors, LoginBody, RequestStateEnum } from "@rrdx-mono/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { authRemember, fetchOrUpdateAuth, selectAuth } from "../../store/features/auth";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../store/features/user";
import { credentialsValidator, setLsItem } from "@rrdx-mono/functions";

/**
 * Login page component
 */
export const Login = () => {
  // state to store the credentials of controlled inputs
  const [credentials, setCredentials] = useState<LoginBody>({ email: "", password: "" });
  // get needed information from the store(error, states, etc)
  const { remember, token, status: authStatus, error: authError } = useAppSelector(selectAuth);
  const { user, status: userStatus, error: userError } = useAppSelector(selectUser);
  // state to store the errors of the controlled inputs
  const [error, setError] = useState<CredentialErrors>({});
  // dispatch to dispatch actions to the store
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  /**
   * Handle the email input change
   * @param e - change event
   */
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, email: e.target.value });
  };

  /**
   * Handle the password input change
   * @param e - change event
   */
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, password: e.target.value });
  };

  /**
   * Handle the remember me checkbox change
   * Store the value in local storage and dispatch the action to the store
   * @param e - change event
   */
  const handleRemember = (e: ChangeEvent<HTMLInputElement>) => {
    setLsItem("remember", e.target.checked);
    dispatch(authRemember(e.target.checked));
  };

  /**
   * Handle the submit button click
   * Validate the credentials and dispatch the action to the store if there are no errors
   */
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError({} as CredentialErrors);
    const { passwordError, emailError } = credentialsValidator(credentials);
    if (!passwordError && !emailError) {
      dispatch(fetchOrUpdateAuth(credentials));
    }
    setError({ passwordError, emailError });
  };

  useEffect(() => {
    //if the user is logged in and the token is present in the store, navigate to the profile page
    if (token && user) {
      navigate("/profile", { replace: true });
    }
  }, [token, user]);

  /** Used to display a loader */
  const isLoading = authStatus === RequestStateEnum.PENDING || userStatus === RequestStateEnum.PENDING;
  return (
    <main style={{ flex: 1, backgroundColor: "#12002b" }}>
      <FormContainer title={"Sign In"}>
        <Input value={credentials.email} onChange={handleEmail} type={"text"} label={"Username"} />
        <ErrorParagraph>{error.emailError && error.emailError}</ErrorParagraph>
        <Input value={credentials.password} onChange={handlePassword} type={"password"} label={"Password"} />
        <ErrorParagraph>{error.passwordError && error.passwordError}</ErrorParagraph>
        <Input checked={remember} onChange={handleRemember} type={"checkbox"} label={"Remember me"} />
        <ErrorParagraph>{authError ?? userError ?? ""}</ErrorParagraph>
        <Button children={isLoading ? <Loader size={20} /> : "Sign In"} onClick={handleSubmit} />
      </FormContainer>
    </main>
  );
};

/** Created by carlos on 08/01/2023 */

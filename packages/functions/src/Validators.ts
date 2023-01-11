import { CredentialErrors, LoginBody } from "@rrdx-mono/types";
import { isEmail, matches } from "class-validator";

export const credentialsValidator = (credentials: LoginBody) => {
  const { password, email } = credentials;
  let error: CredentialErrors = {};
  if (!isEmail(email.trim())) {
    error.emailError = "Invalid email";
  }
  if (!matches(password, /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9.;,:_-]{8,30}$/)) {
    console.log(matches(password, /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9.;,:_-]{8,30}$/));
    error.passwordError = "Password must be at least 8 characters long and contain at least one number.";
  }
  return error;
};

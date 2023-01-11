import { CredentialErrors, LoginBody, UsernameErrors, UsernamePayload } from "@rrdx-mono/types";
import { isEmail, matches, isNotEmpty, length, isAlpha } from "class-validator";

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

export const usernameValidator = (name: UsernamePayload) => {
  const { firstName, lastName } = name;
  let error: UsernameErrors = {};

  const isValid = (val: string) => isNotEmpty(val) || length(val, 3, 15) || isAlpha(val);
  if (!isValid(firstName.trim())) {
    error.firstNameError = "First name is required";
  }
  if (!isValid(lastName.trim())) {
    error.lastNameError = "Last name is required";
  }
  return error;
};

import { Button, FormContainer, Input } from "@rrdx-mono/ui";
import { ChangeEvent } from "react";

interface LoginProps {}

export const Login = ({}: LoginProps) => {
  const handleCredentials = (event: ChangeEvent<HTMLInputElement>) => {};
  const handleSubmit = () => {};

  return (
    <main style={{ flex: 1, backgroundColor: "#12002b" }}>
      <FormContainer title={"Sign In"}>
        <Input onChange={handleCredentials} type={"text"} label={"Username"} />
        <Input onChange={handleCredentials} type={"password"} label={"Password"} />
        <Input onChange={handleCredentials} type={"checkbox"} label={"Remember me"} />
        <Button text={"Sign In"} onClick={handleSubmit} />
      </FormContainer>
    </main>
  );
};

/** Created by carlos on 08/01/2023 */

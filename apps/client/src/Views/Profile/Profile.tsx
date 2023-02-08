import { AccountsCard, Button, ErrorParagraph, Input, Loader, SecondaryFormContainer, Title } from "@rrdx-mono/ui";
import { account } from "../../mockup/account";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchOrUpdateUser, selectUser } from "../../store/features/user";
import { RequestStateEnum, UsernameErrors, UsernamePayload } from "@rrdx-mono/types";
import { usernameValidator } from "@rrdx-mono/functions";

/**
 * Profile page component
 */
export const Profile = () => {
  // Display or not the form to edit the username
  const [isEditing, setIsEditing] = useState(false);

  // The fistName and lastName input values
  const [name, setName] = useState<UsernamePayload>({ firstName: "", lastName: "" });

  /**
   * Handle the firstName input change
   * @param e - change event
   */
  const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => setName({ ...name, firstName: e.target.value });

  /**
   * Handle the lastName input change
   * @param e - change event
   */
  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => setName({ ...name, lastName: e.target.value });

  // Store the errors of the controlled inputs
  const [inputsErrors, setInputsErrors] = useState<UsernameErrors>({} as UsernameErrors);

  // Get needed information from the store(error, states, etc)
  const dispatch = useAppDispatch();
  const { user, status, error: networkError } = useAppSelector(selectUser);

  /**
   * Validate the username and dispatch the action to the store if there are no errors
   */
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputsErrors({} as UsernameErrors);
    const { firstNameError, lastNameError } = usernameValidator(name);
    setInputsErrors({ firstNameError, lastNameError });
    if (!firstNameError && !lastNameError) {
      dispatch(fetchOrUpdateUser(name)).then(() => {
        if (status === RequestStateEnum.RESOLVED) {
          returnToProfile();
        }
      });
    }
  };

  /**
   * Reset the form and hide it
   */
  const returnToProfile = () => {
    setIsEditing(false);
    setName({ firstName: "", lastName: "" });
  };

  return (
    <main style={{ flex: 1, backgroundColor: "#12002b" }}>
      <div style={{ width: "80%", margin: "0 auto 2rem auto", textAlign: "center" }}>
        <Title color={"#fff"} level={"1"}>
          Welcome back
          <br />
          {!isEditing && `${user?.firstName} ${user?.lastName}`}
        </Title>
        {isEditing ? (
          <SecondaryFormContainer>
            <Input
              value={name.firstName}
              placeholder={user?.firstName ?? "First Name"}
              label={""}
              type={"text"}
              onChange={handleFirstName}
            />
            <Input
              value={name.lastName}
              placeholder={user?.lastName ?? "Last Name"}
              label={""}
              type={"text"}
              onChange={handleLastName}
            />
            <ErrorParagraph>{inputsErrors.firstNameError ?? inputsErrors.lastNameError ?? networkError}</ErrorParagraph>
            <Button width={"100px"} onClick={handleSubmit}>
              {status === RequestStateEnum.PENDING ? <Loader size={16} /> : "Save"}
            </Button>
            <Button width={"100px"} children={"Cancel"} onClick={() => setIsEditing(false)} />
          </SecondaryFormContainer>
        ) : (
          <Button margin={"auto"} width={"fit-content"} children={"Edit Name"} onClick={() => setIsEditing(true)} />
        )}
      </div>
      <Title level={"2"} srOnly children={"Accounts"} />
      {account.map((ac, i) => (
        <AccountsCard
          key={i}
          account={ac}
          CTA={{
            CTAText: "View transactions",
            CTAAction: () => {},
          }}
        />
      ))}
    </main>
  );
};

/** Created by carlos on 08/01/2023 */

import { AccountsCard, Button, Input, SecondaryFormContainer, Title } from "@rrdx-mono/ui";
import { account } from "../../mockup/account";
import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/features/user";

interface ProfileProps {}

export const Profile = ({}: ProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleNameValues = () => {};
  const handleSubmit = () => {};
  const { user } = useAppSelector(selectUser);

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
            <Input placeholder={user?.firstName ?? "First Name"} label={""} type={"text"} onChange={handleNameValues} />
            <Input placeholder={user?.lastName ?? "Last Name"} label={""} type={"text"} onChange={handleNameValues} />
            <Button width={"100px"} children={"Save"} onClick={handleSubmit} />
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

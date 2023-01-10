import { AccountsCard, Button, Input, Title } from "@rrdx-mono/ui";
import { account } from "../../mockup/account";
import { useState } from "react";

interface ProfileProps {}

export const Profile = ({}: ProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleNameValues = () => {};
  const handleSubmit = () => {};

  return (
    <main style={{ flex: 1, backgroundColor: "#12002b" }}>
      {}
      <Title level={"1"}>
        Welcome back
        <br />
        {!isEditing && "Tony Jarvis!"}
      </Title>
      {isEditing ? (
        <div>
          <Input label={"First name"} type={"text"} onChange={handleNameValues} />
          <Input label={"Last name"} type={"text"} onChange={handleNameValues} />
          <Button text={"Save"} onClick={handleSubmit} />
          <Button text={"Cancel"} onClick={() => setIsEditing(false)} />
        </div>
      ) : (
        <Button text={"Edit Name"} onClick={() => setIsEditing(true)} />
      )}
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

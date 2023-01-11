import style from "./SecondaryFormContainer.module.scss";
import { Input } from "../../Atoms/Input/Input";
import { Button } from "../../Atoms/Button/Button";
import { ReactElement } from "react";

interface SecondaryFormContainerProps {
  children: ReactElement[];
}

/**
 * Input and Button children elements will be rendered in a different div container
 *
 * ### Usage
 * ```jsx
 * <SecondaryFormContainer>
 *   <Input placeholder={user?.firstName ?? "First Name"} label={""} type={"text"} onChange={handleNameValues} />
 *   <Input placeholder={user?.lastName ?? "Last Name"} label={""} type={"text"} onChange={handleNameValues} />
 *   <Button width={"100px"} children={"Save"} onClick={handleSubmit} />
 *   <Button width={"100px"} children={"Cancel"} onClick={() => setIsEditing(false)} />
 * </SecondaryFormContainer>
 * ```
 */

export const SecondaryFormContainer = ({ children }: SecondaryFormContainerProps) => {
  return (
    <section className={style.SecondaryFormContainer}>
      <form>
        <div className={style.inputs}>{children?.filter((child) => child.type === Input)}</div>
        <div className={style.buttons}>{children?.filter((child) => child.type === Button)}</div>
      </form>
    </section>
  );
};

/** Created by carlos on 11/01/2023 */

import style from "./FormContainer.module.scss";
import { Title } from "../../Atoms/Title/Title";
import { PropsWithChildren } from "react";

interface FormContainerProps extends PropsWithChildren {
  title: string;
}

export const FormContainer = ({ title, children }: FormContainerProps) => {
  return (
    <section className={style.FormContainer}>
      <i style={{ fontSize: "5rem" }} className="fa fa-user-circle"></i>
      <Title level={"1"} children={title} />
      <form>{children}</form>
    </section>
  );
};

/** Created by carlos on 10/01/2023 */

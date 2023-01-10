import style from "./FlexContainer.module.scss";
import { PropsWithChildren } from "react";

interface FlexContainerProps extends PropsWithChildren {
  element: "div" | "article" | "section" | "header" | "footer" | "aside" | "nav" | "main";
}

export const FlexContainer = ({ element, children, ...rest }: FlexContainerProps) => {
  const Element = element as keyof JSX.IntrinsicElements;
  return (
    <Element className={style.FlexContainer} style={{ ...rest }}>
      {children}
    </Element>
  );
};

/** Created by carlos on 09/01/2023 */

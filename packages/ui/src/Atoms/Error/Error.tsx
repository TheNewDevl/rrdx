import style from "./Error.module.scss";
import { ReactNode } from "react";

interface ErrorProps {
  children: ReactNode;
}

/**
 * Renders an error message
 *
 * ## Usage
 * ```jsx
 * <Error>Something went wrong</Error>
 * ```
 */
export const Error = ({ children }: ErrorProps) => {
  return <p className={style.Error}>{children}</p>;
};

/** Created by carlos on 10/01/2023 */

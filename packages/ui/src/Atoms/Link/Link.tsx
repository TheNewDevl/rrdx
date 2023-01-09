import style from "./Link.module.scss";
import { Link as RouterLink } from "react-router-dom";
import { ReactNode } from "react";

interface LinkProps {
  path: string;
  icon?: string;
  linkText: string;
  onClick?: () => void;
  children?: ReactNode;
}

/**
 * Displays a link with an icon and text
 *
 * ## Usage
 * ```jsx
 *  <Link path="/" icon="user-circle" linkText="Sign In" />
 * ```
 */
export const Link = ({ path, icon, linkText, onClick, children }: LinkProps) => {
  return (
    <RouterLink to={path} className={style.Link} onClick={() => onClick && onClick()}>
      {icon && <i className={`fa fa-${icon}`}>&nbsp;</i>}
      {linkText}
      {children && children}
    </RouterLink>
  );
};

/** Created by carlos on 07/01/2023 */

import style from "./Button.module.scss";
import { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  cta?: boolean;
}

/**
 * Return a button element
 * ### Usage
 * ```jsx
 * <Button children="Click me" handleClick={handleClick} />
 * ```
 */
export const Button = ({ children, onClick, cta }: ButtonProps) => {
  const handleClass = () => (cta ? `${style.Button} ${style.cta}` : style.Button);

  return (
    <button onClick={onClick} className={handleClass()}>
      {children}
    </button>
  );
};

/** Created by carlos on 10/01/2023 */

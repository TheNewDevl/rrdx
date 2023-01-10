import style from "./Button.module.scss";
import { MouseEvent } from "react";

interface ButtonProps {
  text: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  cta?: boolean;
}

/**
 * Return a button element
 * ### Usage
 * ```jsx
 * <Button text="Click me" handleClick={handleClick} />
 * ```
 */
export const Button = ({ text, onClick, cta }: ButtonProps) => {
  const handleClass = () => (cta ? `${style.Button} ${style.cta}` : style.Button);

  return (
    <button onClick={onClick} className={handleClass()}>
      {text}
    </button>
  );
};

/** Created by carlos on 10/01/2023 */

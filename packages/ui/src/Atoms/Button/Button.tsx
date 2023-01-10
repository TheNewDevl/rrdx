import style from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

/**
 * Return a button element
 * ### Usage
 * ```jsx
 * <Button text="Click me" handleClick={handleClick} />
 * ```
 */
export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={style.Button}>
      {text}
    </button>
  );
};

/** Created by carlos on 10/01/2023 */

import style from "./Button.module.scss";

interface ButtonProps {
  text: string;
  handleClick: () => void;
}

/**
 * Return a button element
 * ### Usage
 * ```jsx
 * <Button text="Click me" handleClick={handleClick} />
 * ```
 */
export const Button = ({ text, handleClick }: ButtonProps) => {
  return (
    <button onClick={handleClick} className={style.Button}>
      {text}
    </button>
  );
};

/** Created by carlos on 10/01/2023 */

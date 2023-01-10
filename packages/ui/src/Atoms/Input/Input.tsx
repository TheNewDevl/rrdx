import style from "./Input.module.scss";
import { ChangeEvent } from "react";

interface InputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  label: string;
}

/**
 * Return an input element, associated with a label, both wrapped in a div
 * ### Usage
 * ```jsx
 * <Input handleChange={handleChange} type="text" label="Username" />
 * ```
 */
export const Input = ({ handleChange, type, label }: InputProps) => {
  const id = label.toLowerCase().replace(" ", "-");
  const handleClass = () => {
    return type === "checkbox" ? style.Checkbox : style.Input;
  };
  return (
    <div className={handleClass()}>
      <label htmlFor={id}>{label}</label>
      <input onChange={handleChange} type={type} id={id} />
    </div>
  );
};

/** Created by carlos on 10/01/2023 */

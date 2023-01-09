import style from "./Footer.module.scss";

interface FooterProps {
  text?: string;
}

export const Footer = ({ text = "Copyright 2020 Argent Bank" }: FooterProps) => {
  return (
    <footer className={style.Footer}>
      <p className={style.text}>{text}</p>
    </footer>
  );
};

/** Created by carlos on 07/01/2023 */

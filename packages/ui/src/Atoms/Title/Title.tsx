import style from "./Title.module.scss";

interface TitleProps {
  level?: "1" | "2" | "3" | "4" | "5" | "6";
  srOnly?: boolean;
  children: React.ReactNode;
  size?: string;
  margin?: number | string;
  padding?: number | string;
  color?: string;
  fontWeight?: string;
}

export const Title = ({ level = "1", srOnly, children, ...rest }: TitleProps) => {
  let Element = "h1" as keyof JSX.IntrinsicElements;
  if (["1", "2", "3", "4", "5", "6"].includes(level)) {
    Element = `h${level}` as keyof JSX.IntrinsicElements;
  }

  const className = srOnly ? style.sr_only : "";

  return (
    <Element style={{ ...rest }} className={className}>
      {children}
    </Element>
  );
};

/** Created by carlos on 09/01/2023 */

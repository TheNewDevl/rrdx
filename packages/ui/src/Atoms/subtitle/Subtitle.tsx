import style from "./Subtitle.module.scss";

interface SubtitleProps {
  text: string;
}

/**
 * Subtitle component
 * Paragraph element styled as a subtitle
 * ## Usage
 * ```jsx
 * <Subtitle text="This is a subtitle" />
 * ```
 */
export const Subtitle = ({ text }: SubtitleProps) => {
  return <p className={style.Subtitle}>{text}</p>;
};

/** Created by carlos on 10/01/2023 */

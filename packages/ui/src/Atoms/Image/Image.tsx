import style from "./Image.module.scss";

interface ImageProps {
  src: string;
  alt: string;
}

/**
 * Displays an icon image

 * ## Usage
 * ```jsx
 *  <Image src="./sample-img.png" alt="icon" /> *
 * ```
 */
export const Image = ({ src, alt }: ImageProps) => {
  return <img src={src} alt={alt} className={style.Image}></img>;
};

/** Created by carlos on 09/01/2023 */

import style from "./FeatureCard.module.scss";
import { Image } from "../../Atoms/Image/Image";
import { Title } from "../../Atoms/Title/Title";

interface FeatureCardProps {
  imgSrc: string;
  imgAlt: string;
  titleText: string;
  desc: string;
}

/**
 * Render a card with an image, a title and a description

 * ## Usage
 * ```jsx
 * <FeatureCard imgSrc="./img.png" imgAlt="Placeholder image" titleText="Title" desc="Description"
 *  />
 *  ```
 */
export const FeatureCard = ({ imgSrc, imgAlt, titleText, desc }: FeatureCardProps) => {
  return (
    <div className={style.FeatureCard}>
      <Image src={imgSrc} alt={imgAlt} />
      <Title children={titleText} level={"3"} color={"#111"} size={"1.23rem"} mb={"0.5rem"} />
      <p>{desc}</p>
    </div>
  );
};

/** Created by carlos on 09/01/2023 */

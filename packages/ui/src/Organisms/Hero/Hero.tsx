import style from "./Hero.module.scss";
import { Title } from "../../Atoms/Title/Title";
import { Subtitle } from "../../Atoms/subtitle/Subtitle";

interface HeroProps {
  backgroundImg: string;
  titleText: string;
  subTittles: string[];
  paragraphs: string[];
}

/**
 * Render a hero with a background image, a sr title for accessibility and SEO, subtitles and paragraphs
 * ## Usage
 * ```jsx
 * <Hero backgroundImg="./img.png" titleText="Title" subTittles={["Subtitle 1", "Subtitle 2"]} paragraphs={["Paragraph 1", "Paragraph 2"]} />
 * ```
 */
export const Hero = ({ titleText, subTittles, paragraphs, backgroundImg }: HeroProps) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImg})` }} className={style.Hero}>
      <section>
        <Title level={"2"} children={titleText} srOnly />
        {subTittles.map((subTitle, i) => (
          <Subtitle text={subTitle} key={i} />
        ))}
        {paragraphs.map((paragraph, i) => (
          <p className={style.text} key={i}>
            {paragraph}
          </p>
        ))}
      </section>
    </div>
  );
};

/** Created by carlos on 10/01/2023 */

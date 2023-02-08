import { FeatureCard, FlexContainer, Title, Hero } from "@rrdx-mono/ui";
import { features, hero } from "../../mockup/homeMockup";

/**
 * Home page view
 * Displays data from the mockup file
 */
export const Home = () => {
  return (
    <main style={{ flex: 1 }}>
      <Hero subTittles={hero.subtitles} titleText={hero.title} paragraphs={hero.text} backgroundImg={hero.heroBg} />
      <FlexContainer element={"section"}>
        <Title srOnly children={"Features"} />
        {features.map((ft, i) => (
          <FeatureCard key={i} imgSrc={ft.imgSrc} imgAlt={ft.imgAlt} titleText={ft.tittleText} desc={ft.desc} />
        ))}
      </FlexContainer>
    </main>
  );
};

/** Created by carlos on 08/01/2023 */

import { Hero } from "./Hero";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import icon from "../../assets/bank-tree.jpeg";

export default {
  title: "Organisms/Hero",
  component: Hero,
  argTypes: {},
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  subTittles: ["Subtitle 1", "Subtitle 2"],
  paragraphs: ["Paragraph 1", "Paragraph 2"],
  titleText: "sr title",
  backgroundImg: icon,
};
